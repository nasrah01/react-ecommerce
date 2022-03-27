import React from 'react';
import { useSelector } from "react-redux";
import CartItems  from '../components/Cart/CartItems';
import {selectItems, selectTotal} from '../redux/reducers/cart';

const Checkout = () => {
  const items = useSelector(selectItems);
  const total = useSelector(selectTotal);

  return (
    <div className="checkout">
      <div>
        <div>
          <h2>Your secure bag</h2>
        </div>
        <div>{items.length === 0 ? (
          <h1>Basket Empty</h1>
          ) 
          : items.map((item, i) => (
          <CartItems key={i} id={item.id} image={item.image} title={item.title} />
        ))}
        </div>
      </div>
      <div>
        {items.length > 0 && (
          <>
          <h2>Subtotal</h2>
          <p>{total} total</p>
          </>
        )}
      </div>
    </div>
  );
}

export default Checkout
