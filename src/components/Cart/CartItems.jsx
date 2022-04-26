import { useDispatch } from "react-redux";
import {
  removeFromCart,
  addToCart,
  decreaseCartQuantity
} from "../../redux/reducers/cart";
import CurrencyFormat from "react-currency-format";


const CartItems = ({ id, title, image, price, cartQuantity }) => {

  const dispatch = useDispatch();

  const removeItemFromCart = () => {
    dispatch(removeFromCart({ id }))
  }

  const addItemToCart = () => {
    dispatch(addToCart({ id }));
  }

  const decreaseItemFromCart = () => {
    dispatch(decreaseCartQuantity({ id }));
  }


  return (
    <div className="checkout__item">
      <div className="checkout__item--flex">
        <div className="checkout__item--image">
          <img src={image} alt="cart item" height={400} width={400} />
        </div>
        <div className="checkout__item--info">
          <h3>{title}</h3>
          <button onClick={removeItemFromCart}>Remove item</button>
        </div>
      </div>
      <div className="checkout__item--numbers">
        <div className="checkout__cartquantity">
          <button onClick={decreaseItemFromCart}>-</button>
          <div className="count">{cartQuantity}</div>
          <button onClick={addItemToCart}>+</button>
        </div>
        <div className="checkout__subtotal">
          <CurrencyFormat
            value={price * cartQuantity}
            prefix={"£"}
            displayType={"text"}
          />
        </div>
      </div>
    </div>
  );
};

export default CartItems;
