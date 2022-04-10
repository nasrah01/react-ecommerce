import { useDispatch } from "react-redux";
import {
  removeFromCart,
  addToCart,
  decreaseCartQuantity,
} from "../../redux/reducers/cart";
import CurrencyFormat from "react-currency-format";


const CartItems = ({ id, title, image, price, cartQuantity }) => {

  const dispatch = useDispatch();

  const removeItemFromCart = () => {
    dispatch(removeFromCart({ id }))
  }

  const AddItemToCart = () => {
    dispatch(addToCart({ id }));
  }

  const decreaseItemFromCart = () => {
    dispatch(decreaseCartQuantity({ id }));
  }


  return (
    <div>
      <h3>{title}</h3>
      <img src={image} alt="cart item" height={400} width={400} />
      <CurrencyFormat value={price} prefix={"£"} displayType={"text"} />
      <button onClick={removeItemFromCart}>Remove item</button>
      <div>
        <button onClick={decreaseItemFromCart}>-</button>
        <div className="count">{cartQuantity}</div>
        <button onClick={AddItemToCart}>+</button>
      </div>
      <div>
        <h3>sub total</h3>
        <CurrencyFormat
          value={price * cartQuantity}
          prefix={"£"}
          displayType={"text"}
        />
      </div>
    </div>
  );
};

export default CartItems;
