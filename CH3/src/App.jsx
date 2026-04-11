import { Routes, Route } from 'react-router-dom';
import './App.css'
import Header from "./components/Header.jsx";
import ProductList from "./components/ProductList.jsx";
import ProductDetail from "./pages/ProductDetail.jsx";
import { products } from "./data/mockData.js";

function App() {
  return (
    <div>
      <Header name={"최아현"} />
      <Routes>
        <Route path="/" element={<ProductList products={products} />} />
        <Route path="/detail/:id" element={<ProductDetail products={products} />} />
      </Routes>
    </div>
  );
}

export default App;