import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  max-width: 960px;
  margin: 0 auto;
  padding: 0 16px;
`;

export const Header = styled.header`
  position: sticky;
  top: 0;
  z-index: 1;
  padding: 8px;
  border-bottom: 1px solid black;
  background-color: #f5d442;

  > nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

export const Logo = styled.p`
  font-weight: 700;
  margin: 0;
`;

export const Link = styled(NavLink)`
  padding: 8px 0;
  text-decoration: none;
  color: black;
  font-weight: 500;
`;

export const CartLink = styled(NavLink)`
  padding: 8px 16px;
  border: 1px solid black;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 500;

  &.active {
    background-color: orange;
  }
`;
export const Total = styled.p`
  border: none;
  text-decoration: underline;
  margin: 0;
`;
