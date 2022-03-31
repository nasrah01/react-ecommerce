import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
};

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    addProductsByFilter: (state, action) => {
     state.products = [...state.products, action.payload];
    },
  },
});

export const { addProductsByFilter } = filterSlice.actions;

export const selectFilteredItems = (state) => state.filter.items;

export default filterSlice.reducer;
