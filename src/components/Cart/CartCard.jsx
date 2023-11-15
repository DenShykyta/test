import Count from './Count';
import {
  Img,
  ProductName,
  Description,
  DescriptionWrapper,
} from './Cart.styled';

const CartCard = ({ product }) => {
  const {
    title,
    description,
    images: [firstImage = 'https://placehold.co/100x100'],
  } = product;
  return (
    <>
      <Img src={firstImage} alt={title} />
      <DescriptionWrapper>
        <ProductName>{title}</ProductName>
        <Description>{description}</Description>
      </DescriptionWrapper>
      <Count product={product} />
    </>
  );
};

export default CartCard;
