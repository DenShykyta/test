import styled from "styled-components";

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

export const Button = styled.button`
  padding: 4px;
  cursor: pointer;
  border-radius: 4px;
  color: inherit;
  width: 30px;
  transition: 0.2s linear;

  &:hover {
    color: white;
    background-color: grey;
  }
`;

export const BtnWrapper = styled.div`
  display: flex;
  gap: 4px;
`;

export const DescriptionWrapper = styled.div`
  width: 50%;
`;
