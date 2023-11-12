import {
  Container,
  CardWrapper,
  ProductName,
  Description,
  Button,
} from "./ProductList.styled";
import { useDispatch } from "react-redux";
import { clickByProduct } from "../../redux/products/CartSlise";

export const ProductList = ({ products }) => {
  const dispatch = useDispatch();
  return (
    <Container>
      {products.map((product) => (
        <CardWrapper key={product.id}>
          <img src={product.images[0]} alt={product.title} height="100px" />
          <ProductName>{product.title}</ProductName>
          <Description>
            {product.description.slice(0, 50).trim() + "..."}
          </Description>
          <Description>{product.price} usd</Description>
          <Button
            type="button"
            onClick={() => {
              dispatch(clickByProduct(product.id));
            }}
          >
            Add to CART
          </Button>
        </CardWrapper>
      ))}
    </Container>
  );
};
