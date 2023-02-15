import NavBar from './Navigation/NavBar';
import SearchBar from './SearchBar';
import { useEffect } from "react";
import { BsHandbag } from "react-icons/bs";
import { VscSignIn } from "react-icons/vsc";
import { IoLogOutOutline } from 'react-icons/io5'
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getTotal } from '../../redux/reducers/cart';
import './header.css';
import useAuth from '../../hooks/useAuth';
import UseLogout from '../../hooks/logout';

const Header = () => {

  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const cartTotal = cart.cartQuantityTotal;
  const {loggedIn} = useAuth()
  const navigate = useNavigate()
  const logout = UseLogout()

  useEffect(() => {
    dispatch(getTotal());
  }, [cart, dispatch]);

  const handleLogout = async() => {
    await logout()
    navigate('/')
  }

  return (
    <div className="header">
      <div className="header__primary">
        <div className="header__logo">
          <Link to="/" style={{ textDecoration: "none", color: "#000" }}>
            <h2>Ecomm</h2>
            <p>EST. 1992</p>
          </Link>
        </div>
        <SearchBar />
        <div className="header__cart">
          {loggedIn?.username ? (
            <div className='dropdown'>
              <p className='dropdown__btn'>{loggedIn.username}</p>
              <div className='dropdown__content'>
                <div className='dropdown__link' onClick={handleLogout}>
                    <IoLogOutOutline size={16}/>
                  <p>Logout</p>
                </div>
              </div>
            </div>
          ) : (
            <Link to="/login" style={{ textDecoration: "none", color: "#000" }}>
              <div>
                <p className="signin">Sign in</p>
                <div className="signin__responsive icon">
                  <VscSignIn />
                </div>
              </div>
            </Link>
          )}
          <Link
            to="/checkout"
            style={{ textDecoration: "none", color: "#000" }}
          >
            <div className="cart">
              <div className="icon">
                <BsHandbag />
              </div>
              {cartTotal > 0 && (
                <div className="cart__quantity">
                  <span>{cartTotal}</span>
                </div>
              )}
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