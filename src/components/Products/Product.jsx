import React from "react";
import { useDispatch } from "react-redux";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Link } from "react-router-dom";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import "./products.css";
import { selectedItem } from '../../redux/reducers/items'
import CurrencyFormat from "react-currency-format";

const Product = ({ item }) => {

  const dispatch = useDispatch();

  const {id, image, title, price, rating} = item;

  const ratings = Math.round(rating.rate);

  const getItemDetails = () => {
    dispatch(selectedItem(item));
  }

  const theme = createTheme({
    components: {
      MuiCardMedia: {
        styleOverrides: {
          root: {
            objectFit: "scale-down",
          },
        },
      },
    },
    typography: {
      fontSize: 12,
    },
  });

  function truncateString(string, limit) {
    if (string.length > limit) {
      return string.substring(0, limit) + "...";
    } else {
      return string;
    }
  }

  return (
    <div>
      <Card sx={{ border: 0, boxShadow: 1, borderRadius: 1 }} variant="outlined" onClick={getItemDetails}>
        <Link to="/item" style={{ textDecoration: "none" }} key={id}>
        <ThemeProvider theme={theme}>
          <CardMedia component="img" height="290" image={image} alt="apparel" />
        </ThemeProvider>
        <CardContent>
          <Typography gutterBottom variant="body2" color="text.primary" component="div">
            {truncateString(title, 30)}
          </Typography>
          <Typography gutterBottom variant="body2" color="text.primary" component="div">
            {[...Array(ratings)].map((star, index) => {
              index += 1;
              return <span className="item__star" key={index}>&#9733;</span>;
            })}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <CurrencyFormat value={price} prefix={"£"} displayType={"text"} />
          </Typography>
        </CardContent>
        </Link>
      </Card>
    </div>
  );
};

export default Product;
