import './ProductList.css'
import ProductCard from "./ProductCard.jsx";
import {products} from '../data/MockData.js';

function ProductList() {
  return (
    <div className="main">
      <h2>LOGO <span className={"highlight"}>인기</span> 상품</h2>
      <div className="productList">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            image={product.image}
            brand={product.brand}
            name={product.name}
            price={product.price}
            discountRate={product.discountRate}
            isLiked={product.isLiked}
          />
        ))}
      </div>
    </div>
  );
}

export default ProductList;