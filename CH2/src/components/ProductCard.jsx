import './ProductCard.css';
import Heart from '../assets/heart.png';
import Heart_active from '../assets/Heart_active.png';

function ProductCard ({image, brand, name, price, discountRate, isLiked}) {
  return (
    <div className={"productCard"}>
      <img className={"product-img"} src={image} alt="상품이미지" />
      <div>
        <p>{brand}</p>
        <p>{name}</p>
        <p>{discountRate && <span>{discountRate}%</span>} {price}</p>
      </div>
      <img className={"like-img"} src={isLiked ? Heart_active : Heart} alt="좋아요" />
    </div>
  );
}

export default ProductCard;