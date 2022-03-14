import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Footer from './components/Footer/Footer'
import Home from "./pages/home";
import Clothes from './pages/clothes';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/clothes" element={<Clothes />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
