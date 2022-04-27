import React, {useEffect} from 'react';
import { useDispatch, useSelector } from "react-redux";
import CartItems  from '../components/Cart/CartItems';
import {selectItems, getTotal} from '../redux/reducers/cart';
import CurrencyFormat from "react-currency-format";
import { RiShoppingBagLine } from "react-icons/ri";
import { Button, Stack } from "@mui/material";
import { Link } from 'react-router-dom';
import { HiOutlineInformationCircle } from 'react-icons/hi'

const Checkout = () => {
  const items = useSelector(selectItems);
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  console.log(items)
  
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
            <p className="pd checkout__empty--content">Your bag needs filling</p>
            <Link to="/" style={{ textDecoration: "none" }}>
              <Stack direction="row" spacing={2}>
                <Button variant="contained" color="success">
                  Continue shopping
                </Button>
              </Stack>
            </Link>
          </div>
        </div>
      ) : (
        <div className="checkout__option">
          <div className="checkout__items">
            <div className="checkout__items--header">
              <h2>Your secure bag</h2>
              <div className="checkout__quantities">
                <p className="pd">Qty</p>
                <p className="pd">Subtotal</p>
              </div>
            </div>
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
            </div>
          </div>
          <div className="checkout__summary">
            <div className="checkout__summary--container">
              <h2>Summary</h2>
              <div className="checkout__summary--total">
                <div className="checkout__summary--flex">
                  <div>Total</div>
                  <div>
                    <CurrencyFormat
                      value={cart.cartTotalAmount}
                      prefix={"£"}
                      displayType={"text"}
                    />
                  </div>
                </div>
                <Stack direction="row" spacing={2}>
                  <Button variant="contained" color="success" sx={{ m: 1 }}>
                    checkout
                  </Button>
                </Stack>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Checkout
