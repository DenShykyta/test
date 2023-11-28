import styled from 'styled-components';

export const Select = styled.select`
  padding: 8px;
  border-radius: 4px;
  border-style: inset;
  border-width: 2px;
  font: inherit;
  font-size: 16px;
`;

export const Reset = styled.button`
  padding: 10px;
  border-radius: 4px;
  border-width: 2px;
  border-style: inset;
  margin-left: 15px;
  cursor: pointer;
  font-size: 16px;
  margin-right: 4px;
  background-color: unset;
  transition: background-color 0.5s, color 0.5s;

  &:hover {
    color: white;
    background-color: orange;
  }
`;
export const Wrapper = styled.div`
  display: inline-flex;
  align-items: center;
  margin-right: 45%;
`;
