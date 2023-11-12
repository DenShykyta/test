import Count from "./Count";
import {
  Img,
  ProductName,
  Description,
  DescriptionWrapper,
} from "./Cart.styled";
export default function CartCard({ product }) {
  const {
    id,
    title,
    description,
    price,
    count,
    images: [firstImage = "https://placehold.co/100x100"],
  } = product;

  return (
    <>
      <Img src={firstImage} alt={title} />
      <DescriptionWrapper>
        <ProductName>{title}</ProductName>
        <Description>{description}</Description>
      </DescriptionWrapper>
      <Description>{price} usd</Description>
      <Count id={id} count={count} price={price} />
    </>
  );
}
