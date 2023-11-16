import { useSelector, useDispatch } from 'react-redux';
import { AuthWrapper, Link, WelcomeText } from './SharedLayout.styled';
import { logOut } from '../../redux/auth/authOperations';
import { getIsLoggedIn, getUser } from '../../redux/auth/authSelectors';

export const AuthNav = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(getIsLoggedIn);
  const { firstName } = useSelector(getUser);
  return (
    <>
      {isLoggedIn ? (
        <AuthWrapper>
          <WelcomeText>Welcome, {firstName}!</WelcomeText>
          <button type="button" onClick={() => dispatch(logOut())}>
            🚪
          </button>
        </AuthWrapper>
      ) : (
        <AuthWrapper>
          <Link to="/register">Register</Link>
          <Link to="/login">Log In</Link>
        </AuthWrapper>
      )}
    </>
  );
};
