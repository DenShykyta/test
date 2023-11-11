import { createAsyncThunk } from "@reduxjs/toolkit";
import { getProducts } from "../../Services/poducts-api";

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
);
