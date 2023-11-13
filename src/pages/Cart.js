import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import OrderForm from "../components/OrderForm/OrderForm";
import CartList from "../components/Cart/CartList";
import { getProductsThunk } from "../redux/products/productsThunk";
import {
  getProducts,
  getCartIdList,
} from "../redux/products/productsSelectors";

const Cart = () => {
  // const [count, setcount] = useState(1);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductsThunk());
  }, [dispatch]);

  const products = useSelector(getProducts);
  const CartIdList = useSelector(getCartIdList);

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
      <OrderForm />
    </main>
  );
};

export default Cart;
