import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useMemo } from 'react';
import "./styles/App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/home";
import Department from "./pages/department";
import Item from './pages/item';
import Checkout from "./pages/checkout";
import SearchResults from './pages/search';
import ScrollToTop from "./components/ScrollToTop";
import { SearchContext } from "./context/SearchContext";

function App() {

  const [ gmDepartment, setDepartment ] = useState(null)
  const departmentValue = useMemo(() => ({gmDepartment, setDepartment}), [ gmDepartment, setDepartment ]);

  return (
    <div className="App">
      <SearchContext.Provider value={departmentValue}>
      <BrowserRouter>
        <Header />
        <ScrollToTop>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/department/:id" element={<Department />} />
          <Route path="/item/:slug" element={<Item />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/search/:term" element={<SearchResults />} />
        </Routes>
        </ScrollToTop>
        <Footer />
      </BrowserRouter>
      </SearchContext.Provider>
    </div>
  );
}

export default App;
