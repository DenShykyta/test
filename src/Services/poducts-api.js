import axios from "axios";

axios.defaults.baseURL = "https://dummyjson.com";

export const getProducts = async () => {
  const { data } = await axios.get("/products");

  return data.products;
};

export const getProductsByCategory = async (category) => {
  const { data } = await axios.get(`/products/category/${category}`);

  return data.products;
};

export const getCategories = async () => {
  const { data } = await axios.get("/products/categories");

  return data;
};
