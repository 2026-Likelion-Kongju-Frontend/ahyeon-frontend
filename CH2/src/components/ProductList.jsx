import './ProductList.css'
import ProductCard from "./ProductCard.jsx";

const products = [
  { id: 1, image: ("src/assets/Rectangle 4-1.png"), brand: "하하브랜드", name: "버튼 블라우스", price: 34000, discountRate: null, isLiked: false },
  { id: 2, image: ("src/assets/Rectangle 4-2.png"), brand: "키키브랜드", name: "그물 니트 가디건", price: 28400, discountRate: 23, isLiked: false },
  { id: 3, image: ("src/assets/Rectangle 4-3.png"), brand: "야야브랜드", name: "키치 라운드티", price: 17900, discountRate: null, isLiked: true },
  { id: 4, image: ("src/assets/Rectangle 4-4.png"), brand: "호호브랜드", name: "카라 블라우스", price: 23800, discountRate: 30, isLiked: false },

  { id: 5, image: ("src/assets/Rectangle 4-5.png"), brand: "마마브랜드", name: "쉬폰 블라우스", price: 50660, discountRate: null, isLiked: true },
  { id: 6, image: ("src/assets/Rectangle 4-6.png"), brand: "히히브랜드", name: "여성 브이넥", price: 19200, discountRate: 18, isLiked: false },
  { id: 7, image: ("src/assets/Rectangle 4-7.png"), brand: "모모브랜드", name: "체크 스커트", price: 30000, discountRate: 20, isLiked: false },
  { id: 8, image: ("src/assets/Rectangle 4-8.png"), brand: "남남브랜드", name: "니시 니트", price: 43600, discountRate: null, isLiked: false },

  { id: 9, image: ("/assets/Rectangle 4-9.png"), brand: "오오브랜드", name: "여름 민소매", price: 22000, discountRate: null, isLiked: false },
  { id: 10, image: ("src/assets/Rectangle 4-10.png"), brand: "유유브랜드", name: "프린팅 반팔티", price: 26000, discountRate: 10, isLiked: false },
  { id: 11, image: ("src/assets/Rectangle 4-11.png"), brand: "비비브랜드", name: "여성 트레이닝", price: 41000, discountRate: null, isLiked: false },
  { id: 12, image: ("src/assets/Rectangle 4-12.png"), brand: "뷰뷰브랜드", name: "데님 원피스", price: 48000, discountRate: 15, isLiked: false },
];


function ProductList() {
  return (
    <div className="productList">
      LOGO 인기 상품
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
  );
}

export default ProductList;