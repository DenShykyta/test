import React from 'react';
import CartCard from './CartCard';
import { Container, CardWrapper } from './Cart.styled';

function CartList({ products }) {
  return (
    <Container>
      {products.map(product => (
        <CardWrapper key={product.id}>
          <CartCard product={product} />
        </CardWrapper>
      ))}
    </Container>
  );
}

export default CartList;
