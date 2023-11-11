import {
  Container,
  CardWrapper,
  ProductName,
  Description,
  Button,
} from "./ProductList.styled";

export const ProductList = ({ products }) => {
  return (
    <Container>
      {products.map((product) => (
        <CardWrapper key={product.id}>
          <img src={product.images[0]} alt="item" height="100px" />
          <ProductName>{product.title}</ProductName>
          <Description>{product.description}</Description>
          <Description>{product.price} usd</Description>
          <Button>BY</Button>
        </CardWrapper>
      ))}
    </Container>
  );
};
