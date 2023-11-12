import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/products/cartSlise";
import { ProductName, Description, Button, Img } from "./Product.styled";

const ProductCard = ({ product }) => {
  const {
    id,
    title,
    description,
    price,
    images: [firstImage = "https://placehold.co/100x100"],
  } = product;
  const dispatch = useDispatch();
  return (
    <>
      <Img src={firstImage} alt={title} />
      <ProductName>{title}</ProductName>
      <Description>{description.slice(0, 50).trim() + "..."}</Description>
      <Description>{price} usd</Description>
      <Button
        type="button"
        onClick={() => {
          dispatch(addToCart(id));
        }}
      >
        Add to CART
      </Button>
    </>
  );
};

export default ProductCard;
