import Search from './SearchBar';
import NavBar from './NavBar';
import { RiShoppingBagLine } from 'react-icons/ri';
import Box from "@mui/material/Box";

const Header = () => {
  return (
    <div className="header">
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
          p: 1,
          m: 1,
          bgcolor: "background.paper",
          borderRadius: 1,
        }}
      >
        <div>
          <h1>S&K</h1>
          <p>EST. 1992</p>
        </div>
        <div>
          <Search />
        </div>
        <div>
          <div>Sign in</div>
          <RiShoppingBagLine />
        </div>
      </Box>
        <div className="header__secondary">
          <NavBar />
        </div>
     
    </div>
  );
}

export default Header