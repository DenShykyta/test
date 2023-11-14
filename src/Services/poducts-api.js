import axios from 'axios';

axios.defaults.baseURL = 'https://dummyjson.com';

export const getProducts = async () => {
  const { data } = await axios.get('/products');

  return data.products;
};
export const getProductsMore = async skip => {
  const { data } = await axios.get(`/products?skip=${skip}`);

  return data.products;
};
export const getProductById = async id => {
  const { data } = await axios.get(`/products/${id}`);

  return data;
};

export const getProductsByCategory = async category => {
  const { data } = await axios.get(`/products/category/${category}`);

  return data.products;
};

export const getCategories = async () => {
  const { data } = await axios.get('/products/categories');

  return data;
};
