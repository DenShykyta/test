import CartCard from "./CartCard";
import { Container, CardWrapper } from "./Cart.styled";

export const CartList = ({ products }) => {
  return (
    <Container>
      {products.map((product) => (
        <CardWrapper key={product.id}>
          <CartCard product={product} />
        </CardWrapper>
      ))}
    </Container>
  );
};
