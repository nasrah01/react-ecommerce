import { useSelector, useDispatch } from "react-redux";
import CurrencyFormat from "react-currency-format";
import { addToCart } from "../redux/reducers/cart";
import { selectedItem } from '../redux/reducers/items';
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Grid, Card, CardMedia } from "@mui/material";
import { Link } from 'react-router-dom';

const Item = () => {

  const itemSelection = useSelector((state) => state.products.item);
  const allItems = useSelector((state) => state.products.items);
  const dispatch = useDispatch();

  console.log(itemSelection);
  console.log(allItems);

  const {id, image, category, title, description, price, rating} = itemSelection;

  const ratings = Math.round(rating.rate);

   const addItemToCart = () => {
     const product = {
       id,
       image,
       category,
       title,
       description,
       price,
     };
     dispatch(addToCart(product));
   };

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
     });

   const suggestions = allItems.filter((items) => items.category === itemSelection.category).slice(0, 5);
   console.log(suggestions)

  return (
    <div className="item__container">
      <div className="item">
        <div className="item__image">
          <img src={image} alt={category} />
        </div>
        <div className="item__description">
          <p className="item__department">{category.toUpperCase()}</p>
          <h2 className="item__title">{title}</h2>
          <div>
            {[...Array(ratings)].map((star, index) => {
              index += 1;
              return <span className="item__star" key={index}>&#9733;</span>;
            })}
          </div>
          <CurrencyFormat className="item__price" value={price.toFixed(2)} prefix={"£"} displayType={"text"} />
          <div className="item__details">
            <h3>Product details</h3>
            <p>{description}</p>
          </div>
          <div>
              <button onClick={addItemToCart} className='btn btn-1'>
                Add to basket
              </button>
              <Link to="/checkout" style={{ textDecoration: "none" }}>
                <button className='btn btn-2'>
                  checkout
                </button>
              </Link>
          </div>
        </div>
      </div>

      <div className="suggestions__sx">
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
      </div>
    </div>
  );
};

export default Item;
