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
export const RightSide = styled.div`
  display: flex;
  max-width: 500px;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;
export const AuthWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2px;
  }
`;
export const WelcomeText = styled.p`
  margin: 0;
  }
`;

export const Link = styled(NavLink)`
  text-decoration: none;
  color: black;
  font-weight: 500;
  font-weight: 700;
`;

export const CartLink = styled(NavLink)`
  padding: 8px 16px;
  border: 1px solid black;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 500;

  &.active,
  &:hover {
    background-color: orange;
  }
`;
export const Total = styled.p`
  font-weight: 500;
  border: none;
  text-decoration: underline;
  margin: 0;
  user-select: none;
`;
