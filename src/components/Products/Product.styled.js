import styled from 'styled-components';

export const Container = styled.div`
  // display: flex;
  // flex-wrap: wrap;
  // gap: 10px;

  display: grid;
  gap: 5px;
  width: 100%;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
`;

export const CardWrapper = styled.div`
  border: 1px solid black;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  padding: 5px 0;
  justify-content: space-between;
  align-items: center;
  // flex-basis: calc((100% - 40px) / 4);
  overflow: hidden;

  &:hover {
    outline: 2px solid orange;
  }
`;
export const Img = styled.img`
  height: 100px;
  width: 100px;
  object-fit: contain;
`;
export const ProductName = styled.h3`
  color: ${props => (props.isActive ? 'green' : 'black')};
  text-shadow: ${props =>
    props.isActive ? '1px 1px 15px rgba(37,206,8,0.89)' : ''};
  padding: 4px;
  margin-top: 8px;
  margin-bottom: 0;
  // color: black;
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

export const AddButton = styled.button`
  padding: 4px;
  cursor: pointer;
  border-radius: 4px;
  color: inherit;
  width: 100px;
  transition: 0.2s linear;

  &:hover {
    color: white;
    background-color: orange;
  }
`;
export const LoadMoreBtn = styled.button`
  display: block;
  margin: 20px auto;
  padding: 8px;
  cursor: pointer;
  border-radius: 4px;
  color: inherit;
  font-size: 24px;
  font-weight: 500;
  background-color: unset;
  transition: 0.2s linear;

  &:hover {
    color: white;
    background-color: orange;
  }
`;
