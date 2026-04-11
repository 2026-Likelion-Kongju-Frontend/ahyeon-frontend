import { useNavigate } from 'react-router-dom';
import './ProductCard.css';
import Heart from '../assets/heart.png';
import Heart_active from '../assets/Heart_active.png';
import { useState } from 'react';

function ProductCard ({id, image, brand, name, price, discountRate, isLiked}) {
  const [Liked, setLiked] = useState(isLiked);
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/detail/${id}`);
  };

  return (
    <div className={"productCard"} onClick={handleCardClick}>
      <img className={"product-img"} src={image} alt="상품이미지" />
      <div className={"product-info"}>
        <div className={"product-details"}>
          <p className={"product-brand"}>{brand}</p>
          <p className={"product-name"}>{name}</p>
          <p className={"product-price"}>{discountRate > 0 && <span className={"discountRate"}>{discountRate}%</span>} {price.toLocaleString()}</p>
        </div>
        <button className={"like-button"} onClick={() => {setLiked(!Liked)}}>
          <img src={Liked ? Heart_active : Heart} alt="좋아요" />
        </button>
        </div>
    </div>
  );
}

export default ProductCard;