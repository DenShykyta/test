import { Container, CardWrapper, ProductName, Description, Button} from "./ProductList.styled";

export const ProductList = ({ products }) => {
  return (
    <Container>
      {products.map((product) => (
        <CardWrapper key={product.id}>
        <img src="https://via.placeholder.com/200x100" alt="item" />
          <ProductName>{product.name}</ProductName>
          <Description>{product.description}</Description>
          <Description>{product.price} {product.currency}</Description>
        <Button>BY</Button>
        </CardWrapper>
      ))}
    </Container>
  );
};
