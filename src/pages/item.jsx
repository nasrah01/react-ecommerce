import { useSelector, useDispatch } from "react-redux";
import CurrencyFormat from "react-currency-format";
import { addToCart } from "../redux/reducers/cart";
import { selectedItem } from '../redux/reducers/items';
import{ Button, Stack } from "@mui/material";
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

   const suggestions = allItems.filter((items) => items.category === itemSelection.category).slice(0, 4);
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
          <CurrencyFormat className="item__price" value={price} prefix={"£"} displayType={"text"} />
          <div className="item__details">
            <h3>Product details</h3>
            <p>{description}</p>
          </div>
          <div>
            <Stack direction="row" spacing={2}>
              <Button onClick={addItemToCart} variant="contained" color="success">
                Add to basket
              </Button>
              <Button onClick={addItemToCart} variant="contained" color="success">
                checkout
              </Button>
            </Stack>
          </div>
        </div>
      </div>
      <div className="suggestions__sx">
        <h3>You may also like</h3>
        <div className="suggestions__container">
          <div className="suggestions">
            {suggestions.map((item) => (
              <div className="suggestions__image" key={item.id} onClick={() => dispatch(selectedItem(item))}>
                <Link to="/item" style={{ textDecoration: "none" }} key={item.id}>
                    <img src={item.image} alt={item.catagory} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item;
