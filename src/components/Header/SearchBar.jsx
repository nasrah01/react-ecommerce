import { useState } from "react";
import { useDispatch } from 'react-redux';
import { filterItems } from "../../redux/reducers/items";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate } from 'react-router-dom';

const SearchBar = () => {

  const [filterSearch, setFilterSearch] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSearchFilter = (e) => {
    e.preventDefault();
    dispatch(filterItems(filterSearch));
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
        <IconButton type="submit" sx={{ p: "10px" }} aria-label="search">
          <SearchIcon />
        </IconButton>
      </form>
    </div>
  );
};

export default SearchBar;
