import { useDispatch } from "react-redux";
import { removeFromCart, addToCart, decreaseCartQuantity
} from "../../redux/reducers/cart";
import CurrencyFormat from "react-currency-format";
import { urlFor } from "../../client";

const CartItems = ({ id, title, image, size, price, cartQuantity }) => {

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

  const totalValue = price * cartQuantity;

  return (
    <div className="checkout__item--column">
      <div className="checkout__item--content">
        <div className="checkout__item--image">
          <img
            src={urlFor(image[0])}
            alt="cart item"
            height={400}
            width={400}
          />
        </div>
        <div className="checkout__item--info">
          <div>
            <h3>{title}</h3>
            {
              size && <p>Size: {size}</p>
            }
            <CurrencyFormat
              value={price.toFixed(2)}
              prefix={"£"}
              displayType={"text"}
              style={{ fontSize: "1.5rem" }}
            />
          </div>
          <button onClick={removeItemFromCart}>Delete</button>
        </div>
      </div>


      <div className="checkout__subquantity">
        <div className="checkout__cartquantity">
          <button onClick={decreaseItemFromCart}>-</button>
          <div className="count">{cartQuantity}</div>
          <button onClick={addItemToCart}>+</button>
        </div>

        <div className="checkout__subtotal">
          <CurrencyFormat
            value={totalValue.toFixed(2)}
            prefix={"£"}
            displayType={"text"}
            style={{ fontSize: "1.5rem" }}
          />
        </div>
      </div>
    </div>
  );
};

export default CartItems;
