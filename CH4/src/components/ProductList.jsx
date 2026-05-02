import { useState } from 'react';
import { useEffect } from 'react';
// import {products} from '../data/MockData.js';
import { productApi } from '../api/index.js';
import ProductCard from "./ProductCard.jsx";
import './ProductList.css'

function ProductList() {
  const [productList, setProductList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        setIsLoading(true);
        const result = await productApi.getProducts();
        if (result.success) {
          setProductList(result.data);
        } else {
          setError("상품을 가져오지 못했습니다.");
        }
      } catch {
        setError("서버 연결에 실패했습니다.");
      } finally {
        setIsLoading(false);
      }
    };

    loadProducts();
  }, []);

  if (isLoading) return <div className="loading">로딩 중...</div>;
  if (error) return <div className="error">{error}</div>;

  return (
    <div className="main">
      <h2>LOGO <span className="highlight">인기</span> 상품</h2>
      <div className="productList">
        {productList.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </div>
    </div>
  );
}

export default ProductList;