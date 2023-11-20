export const getProducts = state => state.products.items;
export const getCartList = state => state.cart.CartItems;
export const getCategories = state => state.filter.items;
export const getIsLoading = state => state.products.isLoading;
export const getError = state => state.products.error;
