import React from "react";
import { useDispatch } from "react-redux";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Card from "@mui/material/Card";
import { Link } from "react-router-dom";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { IconButton } from "@mui/material";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import "./products.css";
import { addToCart } from "../../redux/reducers/cart";
import { selectedItem } from '../../redux/reducers/items'
import CurrencyFormat from "react-currency-format";

const Product = ({ item }) => {

  const dispatch = useDispatch();

  const {id, image, category, title, description, price} = item;

  const addItemToCart = () => {
    const product = {
      id,
      image,
      category,
      title,
      description,
      price,
    };

    dispatch(addToCart(product))
  }

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
      <Card sx={{ maxWidth: 345 }} onClick={getItemDetails}>
        <Link to="/item" style={{ textDecoration: "none" }} key={id}>
        <ThemeProvider theme={theme}>
          <CardMedia component="img" height="240" image={image} alt="apparel" />
        </ThemeProvider>
        <CardContent>
          <Typography gutterBottom variant="body2" color="text.primary" component="div">
            {truncateString(title, 30)}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <CurrencyFormat value={price} prefix={"£"} displayType={"text"} />
          </Typography>
        </CardContent>
        </Link>
        <CardActions>
          <IconButton onClick={addItemToCart}>
            <LocalMallOutlinedIcon />
          </IconButton>
        </CardActions>
      </Card>
    </div>
  );
};

export default Product;
