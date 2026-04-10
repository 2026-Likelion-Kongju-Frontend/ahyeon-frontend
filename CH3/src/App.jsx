import './App.css'
import Header from "./components/Header.jsx";
import ProductList from "./components/ProductList.jsx";
import ProductDetail from "./pages/ProductDetail.jsx";

function App () {
  return (
    <div>
      <Header name={"최아현"}/>
      <ProductDetail />
    </div>
  );
}

export default App;