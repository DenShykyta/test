import { Container, CardWrapper } from "./Product.styled";

import ProductCard from "./ProductCard";

export const ProductList = ({ products }) => {
  return (
    <Container>
      {products.map((product) => (
        <CardWrapper key={product.id}>
          <ProductCard product={product} />
        </CardWrapper>
      ))}
    </Container>
  );
};
