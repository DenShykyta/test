import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Container, Header, Logo, Link, CartLink } from './SharedLayout.styled';
import TotalPrice from './TotalPrice';

export const SharedLayout = () => {
  return (
    <Container>
      <Header>
        <nav>
          <Link to="/" end>
            <Logo>
              <span>📱 Store</span>
            </Logo>
          </Link>
          <TotalPrice />
          <CartLink to="/cart"> 🛒Cart</CartLink>
        </nav>
      </Header>
      <Suspense fallback={<div>Loading page...</div>}>
        <Outlet />
      </Suspense>
    </Container>
  );
};
