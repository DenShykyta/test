import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../redux/cart/cartSlice';
import { ProductName, Description, AddButton, Img } from './Product.styled';
import { getCartList } from '../../redux/cart/selectors';

const ProductCard = ({ product }) => {
  const {
    title,
    description,
    price,
    images: [firstImage = 'https://placehold.co/100x100'],
  } = product;
  const dispatch = useDispatch();
  const cartItems = useSelector(getCartList);

  const cartIdList = cartItems.map(item => item.id);
  const updatedProduct = { ...product, count: 1 };

  const isActive = cartIdList.includes(product.id);

  return (
    <>
      <Img src={firstImage} alt={title} />
      <ProductName isActive={isActive}>{title}</ProductName>
      <Description>{description.slice(0, 50).trim() + '...'}</Description>
      <Description>{price} usd</Description>
      <AddButton
        type="button"
        onClick={() => {
          dispatch(addToCart(updatedProduct));
        }}
      >
        Add to CART
      </AddButton>
    </>
  );
};

export default ProductCard;
