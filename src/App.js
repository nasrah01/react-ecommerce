import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles/App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/home";
import Department from "./pages/department";
import Checkout from "./pages/checkout";
import SearchItems from './pages/search'

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const TopPicks = async () => {
      const response = await fetch("https://fakestoreapi.com/products");

      const data = await response.json();
      setProducts(data);
    };
    TopPicks();
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Header products={products} />
        <Routes>
          <Route path="/" element={<Home products={products} />} />
          <Route path="/department" element={<Department />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/search" element={<SearchItems />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
