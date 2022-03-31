import { useEffect, useState } from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import { useDispatch } from 'react-redux';
import { addProductsByFilter } from '../../redux/reducers/filterAction';

const SearchBar = ({products}) => {

  const dispatch = useDispatch();

  const [filterSearch, setFilterSearch] = useState(products);

  useEffect(() => {
    setFilterSearch(products)
  }, [products]);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    dispatch(addProductsByFilter(filterSearch));
  };

  return (
    <div>
      <Paper
        component="form"
        sx={{
          p: "2px 4px",
          display: "flex",
          alignContent: "center",
          width: 450,
        }}
        onSubmit={handleFormSubmit}
      >
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="Search"
          onChange={(e) => {
            let search = products.filter((product) =>
              product.title.toLowerCase().includes(e.target.value.toLowerCase())
            );

            setFilterSearch(search);
          }}
        />
        <IconButton type="submit" sx={{ p: "10px" }} aria-label="search">
          <SearchIcon onSubmit={() => {}} />
        </IconButton>
      </Paper>
    </div>
  );
}

export default SearchBar