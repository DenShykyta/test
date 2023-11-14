import { createAsyncThunk } from '@reduxjs/toolkit';
import { getCategories } from '../../Services/poducts-api';

export const getCategoriesThunk = createAsyncThunk(
  'products/getCategories',
  async (_, thunkAPI) => {
    try {
      const data = await getCategories();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
