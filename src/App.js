import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { SharedLayout } from './components/SharedLayout/SharedLayout';
import { useSelector } from 'react-redux';
import { getIsLoggedIn } from './redux/auth/authSelectors';

const Products = lazy(() => import('./pages/Products'));
const Cart = lazy(() => import('./pages/Cart'));
const Login = lazy(() => import('./pages/Login'));
const Register = lazy(() => import('./pages/Register'));

function App() {
  const isLoggedIn = useSelector(getIsLoggedIn);

  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Products />} />
        <Route path="cart" element={<Cart />} />
        <Route path="*" element={<Products />} />
        {!isLoggedIn && <Route path="login" element={<Login />} />}
        {!isLoggedIn && <Route path="register" element={<Register />} />}
      </Route>
    </Routes>
  );
}

export default App;
