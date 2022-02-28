import Search from './SearchBar';
import NavBar from './NavBar';
import { RiShoppingBagLine } from 'react-icons/ri';
import './header.css';

const Header = () => {
  return (
    <div className="header">
      <div className="header__primary">
        <div>Logo</div>
        <div>
          <Search />
        </div>
        <div>
          <div>Sign in</div>
          <RiShoppingBagLine />
        </div>
      </div>
      <div className="header__secondary">
        <NavBar />
      </div>
    </div>
  );
}

export default Header