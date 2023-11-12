import { createAsyncThunk } from "@reduxjs/toolkit";
import { getProducts, getProductsByCategory } from "../../Services/poducts-api";

export const getProductsThunk = createAsyncThunk(
  "products/getAllProducts",
  async (_, thunkAPI) => {
    try {
      const data = await getProducts();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
)
  export const getProductsByCategoryThunk = createAsyncThunk(
  "poducts/getProductsByCategory",
  async (_, thunkAPI) => {
    try {
      const data = await getProductsByCategory();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
