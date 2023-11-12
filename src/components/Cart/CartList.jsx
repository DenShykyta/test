import {
  Container,
  CardWrapper,
  Img,
  ProductName,
  Description,
  Button,
  BtnWrapper,
  DescriptionWrapper,
} from "./CartList.styled";
import { useDispatch } from "react-redux";
import { deleteFromCart } from "../../redux/products/CartSlise";

export const CartList = ({ products }) => {
  const dispatch = useDispatch();

  const decrease = (id) => {
    const changedCountProduct = products.filter((item) => item.id === id);
    return { ...changedCountProduct, count: changedCountProduct.count + 1 };
  };

  return (
    <Container>
      {products.map((product) => (
        <CardWrapper key={product.id}>
          <Img src={product.images[0]} alt={product.title} />
          <DescriptionWrapper>
            <ProductName>{product.title}</ProductName>
            <Description>{product.description}</Description>
          </DescriptionWrapper>
          <Description>{product.price} usd</Description>
          <BtnWrapper>
            <Button type="button" onClick={() => decrease(product.id)}>
              -
            </Button>
            <span>{product.count}</span>
            <Button type="button">+</Button>
            <Button
              type="button"
              onClick={() => dispatch(deleteFromCart(product.id))}
            >
              del
            </Button>
          </BtnWrapper>
        </CardWrapper>
      ))}
    </Container>
  );
};
