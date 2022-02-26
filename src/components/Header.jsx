import React from 'react'
import Search from './SearchBar'
import { RiShoppingBagLine } from 'react-icons/ri'

const Header = () => {
  return (
    <header>
      <div>Logo</div>
      <div>
        <Search />
      </div>
      <div>
        <div>Sign in</div>
        <RiShoppingBagLine />
      </div>
    </header>
  );
}

export default Header