import { useParams } from 'react-router-dom';
import './ProductDetail.css';
import { products } from '../data/MockData.js';
import star from '../assets/star.svg';
import Heart from '../assets/heart.png';
import { useState } from 'react';

function ProductDetail () {
  const { id } = useParams();
  const product = products.find((p) => String(p.id) === String(id));  const [selectedSize, setSelectedSize] = useState("");
  const [selectedSizes, setSelectedSizes] = useState([]);
  const totalQuantity = selectedSizes.reduce((acc, cur) => acc + cur.quan, 0);

  const handleSizeChange = (e) => {
    const newSize = e.target.value;
    if (!newSize) return;

    const isExist = selectedSizes.find((item) => item.optionName === newSize);

    if (isExist) {
      setSelectedSizes(selectedSizes.map(item =>
        item.optionName === newSize
          ? { ...item, quan: item.quan + 1 }
          : item
      ));
    } else {
      const selected = { optionName: newSize, quan: 1 };
      setSelectedSizes([...selectedSizes, selected]);
    }

    setSelectedSize("");
  };

  const handleQuantityChange = (optionName, direction) => {
    setSelectedSizes(selectedSizes.map(item => {
      if (item.optionName === optionName) {
        const newQuan = item.quan + direction;
        return { ...item, quan: newQuan < 1 ? 1 : newQuan }; // 최소 1개 유지
      }
      return item;
    }));
  };

  const handleRemoveSize = (optionName) => {
    setSelectedSizes(selectedSizes.filter(item => item.optionName !== optionName));
  };

  const handleCartClick = () => {
    if (selectedSizes.length === 0) {
      alert("사이즈를 선택해 주세요.");
      return;
    }

    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    selectedSizes.forEach((selectedItem) => {
      const existingItem = cart.find(
        (item) => item.id === product.id && item.optionName === selectedItem.optionName
      );

      if (existingItem) {
        existingItem.quan += selectedItem.quan;
      } else {
        cart.push({
          id: product.id,
          optionName: selectedItem.optionName,
          quan: selectedItem.quan
        });
      }
    });

    localStorage.setItem('cart', JSON.stringify(cart));

    setSelectedSizes([]);
  };

  const totalAmount = selectedSizes.reduce(
    (acc, cur) => acc + (product.price * cur.quan), 0
  );

  return (
    <div className={"ProductDetail"}>
      <div className={"ProductDetail-left"}>
        <img src={product.image} alt="상품이미지" />
        <div className={"ProductDetail-info"}>
          <span>품번</span>
          <span>000-000-000</span>
          <span>성별</span>
          <span>여</span>
          <span>시즌</span>
          <span>2026</span>
          <span>누적 판매</span>
          <span>1.3천 개 이상</span>
        </div>
        <div className={"left-buttons"}>
          <button className={"selected-btn"}>정보</button>
          <button className={"unselected-btn"}>사이즈</button>
          <button className={"unselected-btn"}>리뷰</button>
          <button className={"unselected-btn"}>문의</button>
        </div>
        <div className={"ProductDetail-description"}>
          <img className={"product-description-img"} src={product.descriptionImage} alt="상품설명이미지" />
        </div>
      </div>
      <div className={"ProductDetail-right"}>
        <p className={"ProductDetail-brand"}>{product.brand}</p>
        <p className={"category"}>상의 &gt; 여성상의</p>
        <p className={"ProductDetail-name"}>{product.name}</p>
        <div className={"tags"}>
          <span className={"tag"}>여성인기</span>
          <span className={"tag"}>무료배송</span>
          <span className={"tag"}>LOGO단독</span>
        </div>
        <div className={"reviews-container"}>
          <img src = {star} alt="별점" />
          <span>4.8</span>
          <span className={"reviews"}>후기 73개</span>
        </div>
        <p className={"original-price"}>{product.originalPrice.toLocaleString()}</p>
        <div className={"price-container"}>
          <p>{product.discountRate > 0 && <span className={"discountRate"}>{product.discountRate}%</span>} {product.price.toLocaleString()}</p>
          <img src = {Heart} alt="하트" />
        </div>
        <div>
          <select value={selectedSize} onChange={handleSizeChange} className="size-select">
            <option value="">사이즈</option>
            {product.sizes.map((size) => (
              <option key={size} value={size}>{size}</option>
            ))}
          </select>
          <div className="selected-list">
            {selectedSizes.map((item) => (
              <div key={item.optionName} className="selected-item">
                <div className="item-info">
                  <span>{item.optionName}</span>
                  <button className="remove-btn" onClick={() => handleRemoveSize(item.optionName)}>✕</button>
                </div>
                <div className="item-control">
                  <span className={"arrive-schedule"}>03.26 (목) 도착 예정</span>
                  <div className={"quantity-area"}>
                    <div className="quantity-box">
                      <button className={"minus-btn"} onClick={() => handleQuantityChange(item.optionName, -1)} disabled={item.quan <= 1}>-</button>
                      <span className={"quantity"}>{item.quan}</span>
                      <button className={"plus-btn"} onClick={() => handleQuantityChange(item.optionName, 1)} disabled={item.quan >= 9}>+</button>
                    </div>
                    <span className="item-subtotal">{(product.price * item.quan).toLocaleString()}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {selectedSizes.length > 0 && (
            <div className="total-price-area">
              <span>총 {totalQuantity}개</span>
              <span className="total-price">{totalAmount.toLocaleString()}</span>
            </div>
          )}
          <div className="right-buttons">
            <button className="cart-btn" onClick={handleCartClick}>장바구니</button>
            <button className="buy-btn">구매하기</button>
          </div>
        </div>
        <hr />
        <div className={"free-delivery"}>
          <p>LOGO 회원은 전 품목 무료배송</p>
          <p className={"special-delivery"}>(일부 상품 및 도서 산간 지역 제외)</p>
        </div>
        <hr />
        <div className={"delivery-schedule"}>
          <p>03.26 (목) 도착 예정</p>
          <p>결제 3일 이내 발송 예정</p>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;