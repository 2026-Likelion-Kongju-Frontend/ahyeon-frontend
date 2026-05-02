import { useNavigate } from 'react-router-dom';
import './ProductCard.css';
import Heart from '../assets/heart.png';
import Heart_active from '../assets/Heart_active.png';
import { useState } from 'react';

const BASE_URL = import.meta.env.VITE_API_URL;

function ProductCard ({id, image, brand, name, price, discountRate, isLiked}) {
  const [Liked, setLiked] = useState(isLiked);
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/detail/${id}`);
  };

  const handleLikeClick = (e) => {
    e.stopPropagation();
    setLiked(!Liked);
  };

  return (
    <div className="productCard" onClick={handleCardClick}>
      <img className="product-img" src={`${BASE_URL}${image}`} alt={name} />
      <div className="product-info">
        <div className="product-details">
          <p className="product-brand">{brand}</p>
          <p className="product-name">{name}</p>
          <p className="product-price">
            {discountRate > 0 && <span className="discountRate">{discountRate}%</span>}
            {price.toLocaleString()}원
          </p>
        </div>
        <button className="like-button" onClick={handleLikeClick}>
          <img src={Liked ? Heart_active : Heart} alt="좋아요" />
        </button>
      </div>
    </div>
  );
}

export default ProductCard;