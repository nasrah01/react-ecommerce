import NavBar from './Navigation/NavBar';
import SearchBar from './SearchBar';
import { useEffect } from "react";
import { BsHandbag } from "react-icons/bs";
import { VscSignIn } from "react-icons/vsc";
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getTotal } from '../../redux/reducers/cart';
import './header.css';

const Header = () => {

  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const cartTotal = cart.cartQuantityTotal;

  useEffect(() => {
    dispatch(getTotal());
  }, [cart, dispatch]);

  return (
    <div className="header">
      <div className="header__primary">
        <div className="header__logo">
          <Link to="/" style={{ textDecoration: "none", color: "#000" }}>
            <h2>S&K</h2>
            <p>EST. 1992</p>
          </Link>
        </div>
        <SearchBar />
        <div className="header__cart">
          <div>
            <p className="signin">Sign in</p>
            <div className="signin__responsive icon"><VscSignIn /></div>
          </div>
          <Link
            to="/checkout"
            style={{ textDecoration: "none", color: "#000" }}
          >
            <div className="cart">
              <div className="icon"><BsHandbag /></div>
              {
                cartTotal > 0 && (
                <div className="cart__quantity"><span>{cartTotal}</span></div>
                )
              }
            </div>
          </Link>
        </div>
      </div>
      <div className="header__secondary">
        <NavBar />
      </div>
    </div>
  );
}

export default Header