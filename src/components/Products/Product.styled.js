import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

export const CardWrapper = styled.div`
  border: 1px solid black;
  border-radius: 4px;
  flex-basis: calc((100% - 40px) / 4);
  display: flex;
  flex-direction: column;
  padding: 5px 0;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;
`;
export const Img = styled.img`
  height: 100px;
  width: 100px;
  object-fit: contain;
`;
export const ProductName = styled.h3`
  padding: 4px;
  margin-top: 8px;
  margin-bottom: 0;
  color: black;
  text-align: center;
  text-wrap: balance;
`;
export const Description = styled.p`
  padding: 4px;
  margin-top: 8px;
  margin-bottom: 0;
  color: black;
  font-size: 14px;
  text-align: center;
`;

export const Button = styled.button`
  padding: 4px;
  cursor: pointer;
  border-radius: 4px;
  color: inherit;
  width: 100px;
  transition: 0.2s linear;

  &:hover {
    color: white;
    background-color: grey;
  }
`;
