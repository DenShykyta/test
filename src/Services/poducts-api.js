import axios from 'axios';

axios.defaults.baseURL = 'https://dummyjson.com';

export const getProducts = async () => {
  const { data } = await axios.get('/products');

  return data.products;

};