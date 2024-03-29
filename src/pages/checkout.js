import React, {useEffect} from 'react';
import { useDispatch, useSelector } from "react-redux";
import CartItems  from '../components/Cart/CartItems';
import {selectedItems, getTotal} from '../redux/reducers/cart';
import CurrencyFormat from "react-currency-format";
import { RiShoppingBagLine } from "react-icons/ri";
import { Link } from 'react-router-dom';
import { HiOutlineInformationCircle } from 'react-icons/hi'
import useAuth from '../hooks/useAuth';

const Checkout = () => {
  const items = useSelector(selectedItems);
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const {loggedIn} = useAuth()
  const path = loggedIn?.username ? '/payment' : '/login'
  
  useEffect(() => {
    dispatch(getTotal());
  }, [cart, dispatch]);

  return (
    <div className="checkout__container">
      <div className="checkout__info">
        <HiOutlineInformationCircle size={20} />
        <p className="pd">
          Ordering multiple items? They may be dispatched from multiple
          locations therefore could arrive in separate deliveries.
        </p>
      </div>
      {items.length === 0 ? (
        <div className="checkout">
          <div>
            <h2 className="checkout__header">Your secure bag</h2>
          </div>
          <div className="checkout__empty">
            <RiShoppingBagLine size={42} />
            <h3>Basket Empty</h3>
            <p className="pd checkout__empty--content">
              Your bag needs filling
            </p>
            <Link to={-1} style={{ textDecoration: "none" }}>
              <button className="btn btn-2">Continue shopping</button>
            </Link>
          </div>
        </div>
      ) : (
        <div className="checkout__option">
          <div className="checkout__items">
            <div className="checkout__items--header">
              <h2>Your secure bag</h2>
              <p className="pd">Qty</p>
              <p className="pd">Subtotal</p>
            </div>
            <div className="checkout__item">
              {items.map((item, i) => (
                <CartItems
                  key={i}
                  id={item.id}
                  image={item.image}
                  title={item.title}
                  price={item.price}
                  size={item.size}
                  cartQuantity={item.cartQuantity}
                />
              ))}
            </div>
          </div>
          <div className="checkout__summary">


            <div className="checkout__summary--container">
              <h2>Summary</h2>



                <div className="checkout__summary--details">
                  <p className='pd'>Total</p>
                  <div>
                    <CurrencyFormat
                      value={cart.cartTotalAmount.toFixed(2)}
                      prefix={"£"}
                      displayType={"text"}
                      style={{ fontSize: '1.5rem'}}
                    />
                  </div>
                </div>


                <div className="checkout__summary--btn">
                  <Link to={path} style={{ textDecoration: "none" }}>
                  <button className="btn btn-2">checkout</button>
                  </Link>
                </div>


            </div>


          </div>


        </div>
      )}
    </div>
  );
}

export default Checkout
