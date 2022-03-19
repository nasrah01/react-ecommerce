import React from "react";
import { useDispatch } from "react-redux";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { IconButton } from "@mui/material";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import "./products.css";
import { addToCart } from "../../reducers/cart";

const Product = ({ item }) => {

  const dispatch = useDispatch();

  const {image, title, description, price} = item;

  const addItemToCart = () => {
    const product = {
      image,
      title,
      description,
      price,
    };

    dispatch(addToCart(product))
  }

  return (
    <div>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          height="140"
          image={image}
          alt="apparel"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
            {price}
          </Typography>
        </CardContent>
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
