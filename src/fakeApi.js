const products = [
    { id: "h-1", name: "Hoodie 1", description: "product description", price: 12, currency: "usd" },
    { id: "h-2", name: "Hoodie 2", description: "product description", price: 12, currency: "usd" },
    { id: "h-3", name: "Hoodie 3", description: "product description", price: 12, currency: "usd" },
    { id: "s-1", name: "Sneakers 1", description: "product description", price: 12, currency: "usd" },
    { id: "s-2", name: "Sneakers 2", description: "product description", price: 12, currency: "usd" },
    { id: "s-3", name: "Sneakers 3", description: "product description", price: 12, currency: "usd" },
    { id: "s-4", name: "Sneakers 4", description: "product description", price: 12, currency: "usd" },
    { id: "p-1", name: "Pants 1", description: "product description", price: 12, currency: "usd" },
    { id: "p-2", name: "Pants 2", description: "product description", price: 12, currency: "usd" },
    { id: "p-3", name: "Pants 3", description: "product description", price: 12, currency: "usd" }
  ];
  
  export const getProducts = () => {
    return products;
  };
  
  export const getProductById = (productId) => {
    return products.find((product) => product.id === productId);
  };