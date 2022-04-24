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
    item: [],
    filter: [],
    departmentItems : [],
    department: null,
    status: null,
    error: null,
  },
  reducers: {
    departments: (state, action) => {
      state.department = action.payload;
      const index = state.items.filter((items) => items.category === action.payload);

      state.departmentItems = index;
    },
    selectedItem: (state, action) => {
      state.item = action.payload;

    },
    filterItems: (state, action) => {
      const index = state.items.filter((search) => search.title.toLowerCase().includes(action.payload));
      state.filter = index;
      console.log(action.payload);
      console.log(state.filter.length)
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