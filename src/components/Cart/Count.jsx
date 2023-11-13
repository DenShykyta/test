import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { deleteFromCart } from '../../redux/products/cartSlise';

import { CountButton, BtnCountWrapper, Quantity } from './Cart.styled';

function Count({ id, count, price }) {
  const [countValue, setCountValue] = useState(count);
  const dispatch = useDispatch();

  const decrease = () => {
    if (countValue <= 1) {
      (() => {
        dispatch(deleteFromCart(id));
      })();
    } else {
      (() => setCountValue(countValue - 1))();
    }
  };
  const increase = () => {
    setCountValue(countValue + 1);
  };
  return (
    <BtnCountWrapper>
      <CountButton type="button" onClick={decrease}>
        ➖
      </CountButton>
      <Quantity>{countValue}</Quantity>
      <CountButton type="button" onClick={() => increase()}>
        ➕
      </CountButton>
      <CountButton type="button" onClick={() => dispatch(deleteFromCart(id))}>
        🗑️
      </CountButton>
    </BtnCountWrapper>
  );
}

export default Count;
