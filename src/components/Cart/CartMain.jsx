import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { BtnWrapper, ClearCartBtn } from './Cart.styled';
import OrderForm from '../Forms/OrderForm';
import CartList from './CartList';
import BackToStorBtn from './BackToStorBtn';
import EmptyCart from './EmptyCart';
import { getProductsThunk } from '../../redux/products/productsThunk';
import {
  getProducts,
  getCartIdList,
} from '../../redux/products/productsSelectors';
import { cleanCart } from '../../redux/products/cartSlise';

const Cart = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductsThunk());
  }, [dispatch]);

  const products = useSelector(getProducts);
  const CartIdList = useSelector(getCartIdList);

  const CartProducts = products
    .filter(product => CartIdList.includes(product.id))
    .map(product => {
      return { ...product, count: 1 };
    });
  const handleCleanCart = () => {
    dispatch(cleanCart());
  };

  return (
    <main>
      {CartProducts.length !== 0 ? (
        <CartList products={CartProducts} />
      ) : (
        <EmptyCart />
      )}
      {CartIdList.length !== 0 && <OrderForm />}
      <BtnWrapper>
        <BackToStorBtn />
        {CartIdList.length !== 0 && (
          <ClearCartBtn type="button" onClick={handleCleanCart}>
            Clear Cart
          </ClearCartBtn>
        )}
      </BtnWrapper>
    </main>
  );
};

export default Cart;
