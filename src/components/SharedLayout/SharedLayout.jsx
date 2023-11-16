import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import {
  Container,
  Header,
  RightSide,
  Link,
  CartLink,
} from './SharedLayout.styled';
import TotalPrice from './TotalPrice';
import { AuthNav } from './AuthNav';

export const SharedLayout = () => {
  return (
    <Container>
      <Header>
        <nav>
          <Link to="/" end>
            <p>
              <span>📱 Store</span>
            </p>
          </Link>
          <RightSide>
            <AuthNav />
            <CartLink to="/cart"> 🛒Cart</CartLink>
            <TotalPrice />
          </RightSide>
        </nav>
      </Header>
      <Suspense fallback={<div>Loading page...</div>}>
        <Outlet />
      </Suspense>
    </Container>
  );
};
