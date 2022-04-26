import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = "https://fakestoreapi.com/products";

export const getProducts = createAsyncThunk(
  "products/getProducts",
  async (obj, {rejectWithValue}) => {

    try {
      const { data } = await axios.get("/");
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data)
    }
  }
)

export const productsSlice = createSlice({
  name: "products",
  initialState: {
    items: [],
    item: localStorage.getItem("productDetails") ? JSON.parse(localStorage.getItem("productDetails")) : [],
    filter: [],
    departmentItems : localStorage.getItem("department") ? JSON.parse(localStorage.getItem("department")) : [],
    status: null,
    error: null,
  },
  reducers: {
    departments: (state, action) => {

      const index = state.items.filter((items) => items.category === action.payload);

      state.departmentItems = index;
      localStorage.setItem("department", JSON.stringify(state.departmentItems));
    },
    selectedItem: (state, action) => {
      state.item = action.payload;
      localStorage.setItem("productDetails", JSON.stringify(state.item));

    },
    filterItems: (state, action) => {
      const index = state.items.filter((search) => search.title.toLowerCase().includes(action.payload));
      state.filter = index;
    },
  },
  extraReducers: {
    [getProducts.pending]: (state, action) => {
      state.status = "pending";
    },
    [getProducts.fulfilled]: (state, action) => {
      state.status = "success";
      state.items = action.payload;
    },
    [getProducts.rejected]: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const { departments, selectedItem, filterItems } = productsSlice.actions;

export default productsSlice.reducer