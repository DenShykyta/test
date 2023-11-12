import { CartList } from "../components/Cart/CartList";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getProductsThunk } from "../redux/products/productsThunk";
import { getProducts } from "../redux/products/productsSelectors";

const Cart = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductsThunk());
  }, [dispatch]);
  const products = useSelector(getProducts);
  const CartIdList = useSelector((state) => state.addProducts.CartItems);

  const CartProducts = products
    .filter((product) => CartIdList.includes(product.id))
    .map((product) => {
      return { ...product, count: 1 };
    });

  return (
    <main>
      {CartProducts.length !== 0 ? (
        <CartList products={CartProducts} />
      ) : (
        <p>Empty Cart</p>
      )}
    </main>
  );
};

export default Cart;
