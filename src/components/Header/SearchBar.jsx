import { useState } from "react";
import { useDispatch } from 'react-redux';
import { filterItems } from "../../redux/reducers/items";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
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
  }

  return (
    <>
      <Paper
        component="form"
        sx={{ p: "2px 4px", display: "flex", alignItems: "center", width: 400 }}
        onSubmit={handleSearchFilter}
      >
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="Search products"
          inputProps={{ "aria-label": "search products" }}
          onChange={(e) => setFilterSearch(e.target.value.toLowerCase())}
        />
        <IconButton type="submit" sx={{ p: "10px" }} aria-label="search">
          <SearchIcon />
        </IconButton>
        <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
      </Paper>
    </>
  );
};

export default SearchBar;
