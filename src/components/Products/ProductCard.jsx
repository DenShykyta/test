import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/products/cartSlice';
import { ProductName, Description, AddButton, Img } from './Product.styled';

const ProductCard = ({ product }) => {
  const {
    title,
    description,
    price,
    images: [firstImage = 'https://placehold.co/100x100'],
  } = product;
  const dispatch = useDispatch();
  return (
    <>
      <Img src={firstImage} alt={title} />
      <ProductName>{title}</ProductName>
      <Description>{description.slice(0, 50).trim() + '...'}</Description>
      <Description>{price} usd</Description>
      <AddButton
        type="button"
        onClick={() => {
          dispatch(addToCart(product));
        }}
      >
        Add to CART
      </AddButton>
    </>
  );
};

export default ProductCard;
