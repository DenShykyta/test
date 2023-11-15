import { useDispatch, useSelector } from 'react-redux';
import { BtnWrapper, ClearCartBtn } from './Cart.styled';
import CartList from './CartList';
import OrderForm from '../Forms/OrderForm';
import BackToStorBtn from './BackToStorBtn';
import EmptyCart from './EmptyCart';

import { getCartList } from '../../redux/products/productsSelectors';
import { cleanCart } from '../../redux/products/cartSlice';

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(getCartList);

  const handleCleanCart = () => {
    dispatch(cleanCart());
  };

  return (
    <main>
      {cartItems.length !== 0 ? (
        <CartList products={cartItems} />
      ) : (
        <EmptyCart />
      )}
      {cartItems.length !== 0 && <OrderForm onSubmitForm={handleCleanCart} />}
      <BtnWrapper>
        <BackToStorBtn />
        {cartItems.length !== 0 && (
          <ClearCartBtn type="button" onClick={handleCleanCart}>
            Clear Cart
          </ClearCartBtn>
        )}
      </BtnWrapper>
    </main>
  );
};

export default Cart;
