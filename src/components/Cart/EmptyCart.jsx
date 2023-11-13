import image from '../img/pngwing.com.png';
import {
    EmptyCartImg,
  EmptyWrapper,
  EmptyText,
} from './Cart.styled';

function EmptyCart() {
  return (
    <EmptyWrapper>
      <EmptyText>Your CART is EMPTY</EmptyText>
      <EmptyCartImg src={image} alt="empty cart" />
      
    </EmptyWrapper>
  );
}

export default EmptyCart;
