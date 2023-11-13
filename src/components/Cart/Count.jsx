import { useDispatch } from "react-redux";
import { useState } from "react";
import { deleteFromCart } from "../../redux/products/cartSlise";
// import { totalPrice } from "../../redux/products/TotalSlise";

import { Button, BtnWrapper, Quantity } from "./Cart.styled";

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
      //   (() => dispatch(totalPrice(price, countValue)))();
    }
  };
  const increase = () => {
    setCountValue(countValue + 1);
  };
  return (
    <BtnWrapper>
      <Button type="button" onClick={decrease}>
        ➖
      </Button>
      <Quantity>{countValue}</Quantity>
      <Button type="button" onClick={() => increase()}>
        ➕
      </Button>
      <Button type="button" onClick={() => dispatch(deleteFromCart(id))}>
        🗑️
      </Button>
    </BtnWrapper>
  );
}

export default Count;
