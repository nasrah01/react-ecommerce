import NavBar from '../Navigation/NavBar';
import SearchBar from './SearchBar';
import { useEffect } from "react";
import { RiShoppingBagLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getTotal } from '../../redux/reducers/cart';
import './header.css';

const Header = () => {

  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

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
          <p>Sign in</p>
          <Link
            to="/checkout"
            style={{ textDecoration: "none", color: "#000" }}
          >
            <RiShoppingBagLine size={24} />
            <span>{cart.cartQuantityTotal}</span>
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