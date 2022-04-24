import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './reducers/cart';
import itemsReducer from './reducers/items'

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    products: itemsReducer,
  },
});