import { useDispatch } from "react-redux";
//import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
//import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import { removeFromCart } from "../../redux/reducers/cart";
import CurrencyFormat from "react-currency-format";


const CartItems = ({ id, title, image, description, price }) => {

  const dispatch = useDispatch();

  const removeItemFromCart = () => {
    dispatch(removeFromCart({ id }))
  }

  return (
    <div>
      <h3>{title}</h3>
      <img src={image} alt="cart item" height={400} width={400} />
      <CurrencyFormat value={price} prefix={"£"} displayType={"text"} />
      <button onClick={removeItemFromCart}>Remove item</button>
    </div>
  );
};

export default CartItems;
