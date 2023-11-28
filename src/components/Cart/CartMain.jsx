import { useDispatch, useSelector } from 'react-redux';
import { getCartList } from '../../redux/cart/selectors';
import { cleanCart } from '../../redux/cart/cartSlice';
import OrderForm from '../Forms/OrderForm';
import EmptyCart from './EmptyCart';
import CartList from './CartList';
import BackToStorBtn from './BackToStorBtn';
import { BtnWrapper, ClearCartBtn } from './Cart.styled';

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
