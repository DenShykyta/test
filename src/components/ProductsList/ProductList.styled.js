import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, 200px);
  gap: 16px;
`;

export const CardWrapper = styled.div`
  border: 1px solid black;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  padding-bottom: 5px;
  align-items: center;
  overflow: hidden;
  
`;
export const ProductName = styled.h3`
  padding: 4px;
  margin-top: 8px;
  margin-bottom: 0;
  color: black;
`;
export const Description = styled.p`
  padding: 4px;
  margin-top: 8px;
  margin-bottom: 0;
  color: black;
  font-size: 14px;
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
