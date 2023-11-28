import { getCartList } from '../../redux/cart/selectors';
import { useSelector } from 'react-redux';
import { Total } from './SharedLayout.styled';

function TotalPrice() {
  const cartItems = useSelector(getCartList);

  const totalPricesList = cartItems.map(item => item.count * item.price);
  let totalPrice = 0;
  totalPricesList.map(price => (totalPrice += price));

  return <> {totalPrice > 0 && <Total>Total: {totalPrice} usd</Total>}</>;
}

export default TotalPrice;
