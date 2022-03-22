import React from 'react';
import { useSelector } from "react-redux";
import { selectItems } from "../reducers/cart";
import CartItems  from '../components/Cart/CartItems';

const Checkout = () => {
  const items = useSelector(selectItems);

  return (
    <div className="checkout">
      <h2>{items.length === 0 ? "Basket Empty" : "Shopping Basket"}</h2>
      <div>
        {items.map((item, i) => (
          <CartItems key={i} image={item.image} title={item.title}/>
        ))}
      </div>
    </div>
  );
}

export default Checkout
