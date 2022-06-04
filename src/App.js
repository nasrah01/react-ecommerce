import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles/App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/home";
import Department from "./pages/department";
import Item from './pages/item';
import Checkout from "./pages/checkout";
import SearchResults from './pages/search';
import ScrollToTop from "./components/ScrollToTop";

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <ScrollToTop>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/department" element={<Department />} />
          <Route path="/item" element={<Item />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/search" element={<SearchResults />} />
        </Routes>
        </ScrollToTop>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
