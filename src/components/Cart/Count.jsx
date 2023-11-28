import { useDispatch, useSelector } from 'react-redux';
import { deleteFromCart, changeCount } from '../../redux/cart/cartSlice';
import { getCartList } from '../../redux/cart/selectors';
import {
  CountButton,
  BtnCountWrapper,
  Quantity,
  TotalPrice,
  Wrapper,
} from './Cart.styled';

function Count({ product }) {
  const { id, count, price } = product;
  const dispatch = useDispatch();
  const cartList = useSelector(getCartList);

  // Створює новий масив з отримано зі стейту масиву cartList зі зменшиним count у вибраному по id об'єкті
  const decreasedCart = cartList.map(item => {
    if (item.id === id) {
      return {
        ...item,
        count: item.count - 1,
        totalPrice: count * price,
      };
    }
    return item;
  });

  // Створює масив з отримано зі стейту масиву cartList зі збільшеним count у вибраному по id об'єкті
  const increasedCart = cartList.map(item => {
    if (item.id === id) {
      return { ...item, count: item.count + 1 };
    }
    return item;
  });

  // Зменшення count при натисканні кнопки "-" шляхом відправки в state зміненого вище масиву об'єктів, якщо зменшення від значення 1, то товар видаляється з корзини
  const decrease = () => {
    if (count <= 1) {
      (() => {
        dispatch(deleteFromCart(id));
      })();
    } else {
      dispatch(changeCount(decreasedCart));
    }
  };
  // Збільшення count при натисканні кнопки "+" шляхом відправки в state зміненого вище масиву об'єктів
  const increase = () => {
    dispatch(changeCount(increasedCart));
  };
  const totalPrice = count * price;
  return (
    <Wrapper>
      <TotalPrice>{totalPrice} usd</TotalPrice>
      <BtnCountWrapper>
        <CountButton type="button" onClick={decrease}>
          ➖
        </CountButton>
        <Quantity>{count}</Quantity>
        <CountButton type="button" onClick={increase}>
          ➕
        </CountButton>
        <CountButton type="button" onClick={() => dispatch(deleteFromCart(id))}>
          🗑️
        </CountButton>
      </BtnCountWrapper>
    </Wrapper>
  );
}

export default Count;
