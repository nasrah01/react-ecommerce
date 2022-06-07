import { useState } from "react";
import { GoSearch } from "react-icons/go";
import { useNavigate } from 'react-router-dom';

const SearchBar = () => {

  const [filterSearch, setFilterSearch] = useState('');
  const navigate = useNavigate();

  const handleSearchFilter = (e) => {
    e.preventDefault();
    navigate("/search", { replace: true });
    setFilterSearch('');
  }

  return (
    <div className="header__search">
      <form onSubmit={handleSearchFilter} className="search">
        <input
          className="search__input"
          placeholder="Search products"
          value={filterSearch}
          onChange={(e) => setFilterSearch(e.target.value.toLowerCase())}
        />
        <button className="search__button" type="submit">
          <GoSearch />
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
