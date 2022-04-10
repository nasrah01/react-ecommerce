import NavBar from '../Navigation/NavBar';
import { useState, useEffect } from "react";
import { RiShoppingBagLine } from 'react-icons/ri';
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getTotal } from '../../redux/reducers/cart';
import './header.css';

const Header = ({products}) => {

  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTotal());
  }, [cart, dispatch]);

  const [filterSearch, setFilterSearch] = useState(products);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(filterSearch)
  };


  return (
    <div className="header">
      <div className="header__primary">
        <div className="header__logo">
          <Link to="/" style={{ textDecoration: "none", color: "#000" }}>
            <h2>S&K</h2>
            <p>EST. 1992</p>
          </Link>
        </div>

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
                  product.title
                    .toLowerCase()
                    .includes(e.target.value.toLowerCase())
                );

                setFilterSearch(search);
              }}
            />
            <IconButton type="submit" sx={{ p: "10px" }} aria-label="search">
              <SearchIcon onSubmit={() => {}} />
            </IconButton>
          </Paper>
        </div>

        <div className="header__cart">
          <p>Sign in</p>
          <Link
            to="/checkout"
            style={{ textDecoration: "none", color: "#000" }}
          >
            <RiShoppingBagLine size={24} />
            <span>{cart.cartQuantityTotal}</span>
          </Link>
        </div>
      </div>
      <div className="header__secondary">
        <NavBar />
      </div>
    </div>
  );
}

export default Header