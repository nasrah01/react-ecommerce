import Search from '../Navigation/SearchBar';
import NavBar from '../Navigation/NavBar';
import { RiShoppingBagLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import './header.css';
import { selectItems } from '../../reducers/cart';

const Header = () => {

  const items = useSelector(selectItems);

  return (
    <div className="header">
      <div className="header__primary">
        <div className="header__logo">
          <Link to="/" style={{ textDecoration: "none", color: "#000" }}>
            <h2>S&K</h2>
            <p>EST. 1992</p>
          </Link>
        </div>

        <div>
          <Search />
        </div>
        <div className="header__cart">
          <p>Sign in</p>
          <Link
            to="/checkout"
            style={{ textDecoration: "none", color: "#000" }}
          >
            <RiShoppingBagLine size={24} />
            <span>{items.length}</span>
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