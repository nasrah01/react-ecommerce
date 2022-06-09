import { useDispatch } from "react-redux";
import CurrencyFormat from "react-currency-format";
import { addToCart } from "../redux/reducers/cart";
//import { createTheme, ThemeProvider } from "@mui/material/styles";
//import { Grid, Card, CardMedia } from "@mui/material";
import { Link } from 'react-router-dom';
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { client } from "../client";
import { urlFor } from "../client";

const Item = () => {
  const [ itemDetails, setItemDetails ] = useState(null)
  const [ hasItem, setHasItem ] = useState(false)
  const { slug } = useParams();

   useEffect(() => {
     client
       .fetch(
         `*[_type == "product" && slug.current == "${slug}"]{
            _id,
            image,
            department,
            title,
            price,
            details,
            rating
        }`
       )
       .then((data) => {
         setItemDetails(data[0])
         setHasItem(true)
       })
       .catch((error) => console.log(error.message));
   }, [slug]);

  const dispatch = useDispatch();

  const addItemToCart = () => {

    itemDetails['id'] = itemDetails._id;

     dispatch(addToCart(itemDetails));
   };

   console.log(itemDetails)
/*      const theme = createTheme({
       components: {
         MuiCardMedia: {
           styleOverrides: {
             root: {
               objectFit: "scale-down",
             },
           },
         },
       },
     });  */

  return (
    <div className="item__container">
      {hasItem && (
        <div className="item">
          <div className="item__image">
            <img src={urlFor(itemDetails.image[0])} alt={itemDetails.title} />
          </div>
          <div className="item__description">
            <p className="item__department">
              {itemDetails.department.toUpperCase()}
            </p>
            <h2 className="item__title">{itemDetails.title}</h2>
            <div>
              {[...Array(itemDetails.rating)].map((star, index) => {
                index += 1;
                return (
                  <span className="item__star" key={index}>
                    &#9733;
                  </span>
                );
              })}
            </div>
            <CurrencyFormat
              className="item__price"
              value={itemDetails.price}
              prefix={"£"}
              displayType={"text"}
            />
            <div className="item__details">
              <h3>Product details</h3>
              <p>{itemDetails.details}</p>
            </div>
            <div className="item__checkout--btn">
              <button onClick={addItemToCart} className="btn btn-1">
                Add to basket
              </button>
              <Link to="/checkout" style={{ textDecoration: "none" }}>
                <button className="btn btn-2">checkout</button>
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* <div className="suggestions__sx">
        <h3>You may also like</h3>
        <Grid container justifyContent="center" spacing={5}>
            {suggestions.map((item) => ( 
              <Grid item width={250}>
                <Card sx={{ border: 0, boxShadow: 1, borderRadius: 1, p: 2}}  onClick={() => dispatch(selectedItem(item))}>
                  <Link to="/item" style={{ textDecoration: "none" }} key={item.id}>
                    <ThemeProvider theme={theme}>
                      <CardMedia component="img" height="250" image={item.image} alt={item.catagory} />
                    </ThemeProvider>
                  </Link>
                </Card> 
              </Grid>
            ))}
        </Grid> 
      </div>*/}
    </div>
  );
};

export default Item;
