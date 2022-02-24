import React from 'react'
import { IoSearchOutline } from 'react-icons/io'

const SearchBar = () => {

  const onSearchSubmit = (e) => {
    
    const searchInput = e.target.value();
    console.log(searchInput);
  }
  return (
    <div>
      <input
        type="text"
        id="search"
        name="search"
        placeholder="Search product"
        onChange={onSearchSubmit}
      />
      <div>
        <div>
          <IoSearchOutline />
        </div>
      </div>
    </div>
  );
}

export default SearchBar