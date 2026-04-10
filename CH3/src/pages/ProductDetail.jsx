import './ProductDetail.css';
import { products } from '../data/MockData.js';
import star from '../assets/star.svg';
import Heart from '../assets/heart.png';
import Heart_active from '../assets/heart_active.png';

function ProductDetail () {
  const product = products[0];

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
        <option value="">사이즈 선택</option>
        <div className={"right-buttons"}>
          <button className={"cart-btn"}>장바구니</button>
          <button className={"buy-btn"}>구매하기</button>
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