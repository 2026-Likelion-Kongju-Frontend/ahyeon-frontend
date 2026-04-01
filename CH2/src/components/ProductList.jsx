import './ProductList.css'
import ProductCard from "./ProductCard.jsx";


function ProductList() {
  return (
    <div className="productList">
      LOGO 인기 상품
      <ProductCard></ProductCard>
    </div>
  )
}

export default ProductList;