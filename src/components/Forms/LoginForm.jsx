import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Form, Button, Warning, FormGroup } from './Forms.style';
import { loginSchema } from '../schemas';
import { logIn } from '../../redux/auth/authOperations';

export const LoginForm = () => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(loginSchema),
    // User data from the backend, as the backend does not allow creating a new user
    defaultValues: { username: 'hbingley1', password: 'CQutx25i8r' },
  });

  const onSubmitForm = data => {
    dispatch(logIn(data));
    reset();
  };

  return (
    <Form onSubmit={handleSubmit(onSubmitForm)} autoComplete="off">
      <FormGroup>
        Name
        <input
          autoFocus
          type="text"
          {...register('username')}
          placeholder="Enter name ..."
        />
        <Warning>{errors.username?.message}</Warning>
      </FormGroup>
      <FormGroup>
        Password
        <input
          type="password"
          {...register('password')}
          placeholder="Enter password ..."
        />
        <Warning>{errors.password?.message}</Warning>
      </FormGroup>
      <Button type="submit">Log In</Button>
    </Form>
  );
};
