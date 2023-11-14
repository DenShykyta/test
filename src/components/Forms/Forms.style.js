import styled from 'styled-components';

export const FormOrder = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid black;
  border-radius: 4px;
  max-width: 300px;
  margin: 20px auto;
  padding: 10px 0;
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
    background-color: orange;
  }
`;
export const Warning = styled.p`
  font-size: 10px;
  color: red;
  margin: 0;
  position: relative;
  top: 0;
`;
export const FormGroup = styled.label`
  display: flex;
  flex-direction: column;
  gap: 2px;
  font-size: 12px;
  margin-bottom: 5px;
`;
