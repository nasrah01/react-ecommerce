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
import Login from './pages/login'
import Register from './pages/register'
import Payment from './pages/payment'
import RequireAuth from "./components/Auth/RequireAuth";
import PersistLoggin from "./components/Auth/PersistLoggin";
import ScrollToTop from "./components/ScrollToTop";
import { SearchContext } from "./context/SearchContext";
import { LoginProvider} from './context/loginContext'

function App() {

  const [ gmDepartment, setDepartment ] = useState(null)
  const departmentValue = useMemo(() => ({gmDepartment, setDepartment}), [ gmDepartment, setDepartment ]);

  return (
    <div className="App">
      <SearchContext.Provider value={departmentValue}>
        <LoginProvider>
          <BrowserRouter>
            <Header />
            <ScrollToTop>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/department/:id" element={<Department />} />
                <Route path="/item/:slug" element={<Item />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="/search/:term" element={<SearchResults />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route element={<PersistLoggin />}>
                  <Route element={<RequireAuth />} >
                    <Route path="/payment" element={<Payment />} />
                  </Route>
                </Route>
                <Route path="*" element={<Home />} />
              </Routes>
            </ScrollToTop>
            <Footer />
          </BrowserRouter>
        </LoginProvider>
      </SearchContext.Provider>
    </div>
  );
}

export default App;
