import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './reducers/cart';
import filterProduct from './reducers/filterAction';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    filter: filterProduct,
  },
});