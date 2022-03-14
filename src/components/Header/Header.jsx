import Search from '../Navigation/SearchBar';
import NavBar from '../Navigation/NavBar';
import { RiShoppingBagLine } from 'react-icons/ri';

import './header.css';

const Header = () => {
  return (
    <div className="header">
      <div className="header__primary">
        <div className="header__logo">
          <h2>S&K</h2>
          <p>EST. 1992</p>
        </div>
        <div>
          <Search />
        </div>
        <div className="header__cart">
          <p>Sign in</p>
          <RiShoppingBagLine size={24}/>
        </div>
      </div>
        <div className="header__secondary">
          <NavBar />
        </div>
     
    </div>
  );
}

export default Header