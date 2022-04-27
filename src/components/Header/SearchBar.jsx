import { useState } from "react";
import { useDispatch } from 'react-redux';
import { filterItems } from "../../redux/reducers/items";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
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
    <>
      <Paper
        component="form"
        sx={{ p: "2px 4px", display: "flex", alignItems: "center" }}
        onSubmit={handleSearchFilter}
        square
      >
        <InputBase
          sx={{ ml: 1, flex: 1, width: 400 }}
          placeholder="Search products"
          inputProps={{ "aria-label": "search products" }}
          value={filterSearch}
          onChange={(e) => setFilterSearch(e.target.value.toLowerCase())}
        />
        <IconButton type="submit" sx={{ p: "10px" }} aria-label="search">
          <SearchIcon />
        </IconButton>
      </Paper>
    </>
  );
};

export default SearchBar;
