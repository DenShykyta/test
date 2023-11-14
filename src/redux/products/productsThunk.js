import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  getProducts,
  getProductsByCategory,
  getProductsMore,
} from '../../Services/poducts-api';

export const getProductsThunk = createAsyncThunk(
  'products/getAllProducts',
  async (_, thunkAPI) => {
    try {
      const data = await getProducts();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const getProductsMoreThunk = createAsyncThunk(
  'products/getProductsMore',
  async (skip, thunkAPI) => {
    try {
      const data = await getProductsMore(skip);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getProductsByCategoryThunk = createAsyncThunk(
  'poducts/getProductsByCategory',
  async (category, thunkAPI) => {
    try {
      const data = await getProductsByCategory(category);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
