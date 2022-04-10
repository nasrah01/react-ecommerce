import React, {useEffect} from 'react';
import { useDispatch, useSelector } from "react-redux";
import CartItems  from '../components/Cart/CartItems';
import {selectItems, getTotal} from '../redux/reducers/cart';
import CurrencyFormat from "react-currency-format";

const Checkout = () => {
  const items = useSelector(selectItems);
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  console.log(items)

  
  useEffect(() => {
    dispatch(getTotal());
  }, [cart, dispatch]);

  return (
    <div className="checkout">
      <div>
        <div>
          <h2>Your secure bag</h2>
        </div>
        <div>
          {items.length === 0 ? (
            <div>
              <h1>Basket Empty</h1>
              <p></p>
            </div>
          ) : (
            <div>
              {items.map((item, i) => (
                <CartItems
                  key={i}
                  id={item.id}
                  image={item.image}
                  title={item.title}
                  price={item.price}
                  cartQuantity={item.cartQuantity}
                />
              ))}
              {
                <CurrencyFormat
                  value={cart.cartTotalAmount}
                  prefix={"£"}
                  displayType={"text"}
                />
              }
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Checkout
