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
  margin: 0 10px;
  text-align: center;
`;
export const Description = styled.p`
  margin: 0 10px;
  font-size: 14px;
  text-wrap: balance;
  text-align: center;
`;

export const CountButton = styled.button`
  margin-left: -8px;
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
  // display: flex;
  // gap: 4px;
  display: grid;
  gap: 6px;
  width: 15%;
  grid-template-columns: repeat(auto-fit, minmax(20px, 1fr));
`;

export const DescriptionWrapper = styled.div`
  width: 50%;
`;

export const Quantity = styled.span`
  text-align: right;
  font-size: 18px;
  padding: 8px;
  margin-left: -8px;
`;
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
`;
export const LinkToProducts = styled(Link)`
  font-size: 24px;
  padding: 4px 16px;
  text-decoration: none;
  color: inherit;
  border-radius: 30px;
  border: 2px solid black;
  background-color: unset;
  transition: 0.2s linear;

  &:hover {
    background-color: orange;
    color: white;
  }
`;
export const ClearCartBtn = styled.button`
  background-color: unset;
  font-size: 24px;
  color: inherit;
  padding: 4px 16px;
  border-radius: 30px;
  border: 2px solid black;
  transition: 0.2s linear;

  &:hover {
    background-color: orange;
    color: white;
`;
