import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: localStorage.getItem("items") ? JSON.parse(localStorage.getItem("items")) : [],
  cartTotalAmount: 0,
  cartQuantityTotal: 0,
}

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const itemIndex = state.items.findIndex(
        (cartItem) => cartItem.id === action.payload.id
      );
      
      if(itemIndex >= 0) {
        state.items[itemIndex].cartQuantity += 1;
      } else {
        const cartItems = {...action.payload, cartQuantity: 1};
        state.items.push(cartItems); 
      }

      localStorage.setItem("items", JSON.stringify(state.items));
    },
    removeFromCart: (state, action) => {
      const index = state.items.findIndex(cartItem => cartItem.id === action.payload.id);

      let newCart = [...state.items];

      if(index >= 0) {
        newCart.splice(index, 1)
      }

      state.items = newCart;

      localStorage.setItem("items", JSON.stringify(state.items))
    },
    decreaseCartQuantity: (state, action) => {
       const index = state.items.findIndex(
         (itemCart) => itemCart.id === action.payload.id
       );

       if(state.items[index].cartQuantity > 1) {
         state.items[index].cartQuantity -= 1
       } else if(state.items[index].cartQuantity === 1) {
         const newQuantity = state.items.filter((cartItem) => cartItem.id !== action.payload.id);
         state.items = newQuantity;
       }
       localStorage.setItem("items", JSON.stringify(state.items));
    },
    getTotal: (state, action) => {
      let {total, quantity } = state.items.reduce(
        (cartTotal, itemSub) => {
          const {price, cartQuantity} = itemSub;
          const itemTotal = price * cartQuantity;

          cartTotal.total += itemTotal;
          cartTotal.quantity += cartQuantity;

          return cartTotal;
        },
        {
          total: 0,
          quantity: 0,
        }
      );

      state.cartQuantityTotal = quantity;
      state.cartTotalAmount = total;
    }
  },
});

export const {addToCart, removeFromCart, decreaseCartQuantity, getTotal} = cartSlice.actions;

export const selectedItems = (state) => state.cart.items;

export default cartSlice.reducer;