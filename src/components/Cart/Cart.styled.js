import styled from 'styled-components';
import { Link } from 'react-router-dom';
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin-top: 15px;
`;

export const CardWrapper = styled.div`
  border: 1px solid black;
  border-radius: 4px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px;
`;
export const Img = styled.img`
  height: 100px;
  width: 100px;
  object-fit: contain;
`;
export const ProductName = styled.h3`
  text-align: center;
`;
export const Description = styled.p`
  font-size: 14px;
  text-align: center;
`;

export const CountButton = styled.button`
  margin-left: 4px;
  padding: 4px;
  cursor: pointer;
  border: none;
  border-radius: 50px;
  color: inherit;
  width: 40px;

  background-color: unset;
  transition: 0.2s linear;

  &:hover {
    color: white;
    background-color: orange;
  }
`;

export const BtnCountWrapper = styled.div`
  display: flex;
  gap: 4px;
`;

export const DescriptionWrapper = styled.div`
  max-width: 50%;
`;

export const Quantity = styled.span`
  text-align: right;
  font-size: 18px;
  padding: 8px;
  margin-left: -8px;
`;
export const TotalPrice = styled(Quantity)``;
export const EmptyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 15px;
  justify-content: space-between;
  align-items: center;
`;
export const EmptyText = styled.h1`
  font-size: 24px;
`;
export const EmptyCartImg = styled.img`
  display: block;
  max-width: 30%;
`;
export const BtnWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;
export const LinkToProducts = styled(Link)`
  font-size: 16px;
  padding: 4px 16px;
  color: inherit;
  background-color: unset;
  border-radius: 30px;
  text-decoration: none;
  transition: 0.2s linear;

  outline: 2px solid black;

  &:hover {
    background-color: orange;
    color: white;
  }
`;
export const ClearCartBtn = styled(LinkToProducts)``;
export const Wrapper = styled.div`
  display: flex;
`;
