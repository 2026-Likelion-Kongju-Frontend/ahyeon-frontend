import './ProductCard.css';
import Heart from '../assets/heart.png';
import Heart_active from '../assets/Heart_active.png';

function ProductCard ({image, brand, name, price, discountRate, isLiked}) {
  return (
    <div className={"productCard"}>
      <img className={"product-img"} src={image} alt="상품이미지" />
      <div className={"product-info"}>
        <div className={"product-details"}>
          <p className={"product-brand"}>{brand}</p>
          <p className={"product-name"}>{name}</p>
          <p className={"product-price"}>{discountRate && <span className={"discountRate"}>{discountRate}%</span>} {price.toLocaleString()}</p>
        </div>
        <img className={"like-img"} src={isLiked ? Heart_active : Heart} alt="좋아요" />
        </div>
    </div>
  );
}

export default ProductCard;