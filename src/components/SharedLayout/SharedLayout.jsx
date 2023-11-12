import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Container, Header, Logo, Link } from "./SharedLayout.styled";

export const SharedLayout = () => {
  return (
    <Container>
      <Header>
        <nav>
          <Link to="/" end>
            <Logo>
              <span>📱 Test Store</span>
            </Logo>
          </Link>
          <Link to="/cart"> 🛒Cart</Link>
        </nav>
      </Header>
      <Suspense fallback={<div>Loading page...</div>}>
        <Outlet />
      </Suspense>
    </Container>
  );
};
