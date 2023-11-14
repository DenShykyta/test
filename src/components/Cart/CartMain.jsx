import { useDispatch, useSelector } from 'react-redux';
import { BtnWrapper, ClearCartBtn } from './Cart.styled';
import OrderForm from '../Forms/OrderForm';
import CartList from './CartList';
import BackToStorBtn from './BackToStorBtn';
import EmptyCart from './EmptyCart';
import {
  getCartIdList,
} from '../../redux/products/productsSelectors';
import { cleanCart } from '../../redux/products/cartSlice';

const Cart = () => {
  const dispatch = useDispatch();
  const productsList = useSelector(getCartIdList);

  const CartProducts = productsList.map(product => {
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
      {productsList.length !== 0 && (
        <OrderForm onSubmitForm={handleCleanCart} />
      )}
      <BtnWrapper>
        <BackToStorBtn />
        {productsList.length !== 0 && (
          <ClearCartBtn type="button" onClick={handleCleanCart}>
            Clear Cart
          </ClearCartBtn>
        )}
      </BtnWrapper>
    </main>
  );
};

export default Cart;
