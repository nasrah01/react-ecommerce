import NavBar from './Navigation/NavBar';
import SearchBar from './SearchBar';
import { useEffect } from "react";
import { RiShoppingBagLine } from 'react-icons/ri';
import { BsFillPersonFill } from 'react-icons/bs';
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
            <div className="signin__responsive"><BsFillPersonFill size={30}/></div>
          </div>
          
          <Link
            to="/checkout"
            style={{ textDecoration: "none", color: "#000" }}
          >
            <div className="cart">
              <RiShoppingBagLine size={30} />
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