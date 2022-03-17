import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';

const SearchBar = () => {

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
        onSubmit={() => {}}
      >
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="Search"
          InputProps={{ style: { fontSize: 60 } }}
          InputLabelProps={{ style: { fontSize: 40 } }}
          onChange={() => {}}
        />
        <IconButton type="submit" sx={{ p: "10px" }} aria-label="search">
          <SearchIcon />
        </IconButton>
      </Paper>
    </div>
  );
}

export default SearchBar