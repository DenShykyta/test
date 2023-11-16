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

// const handleSubmit = e => {
//   e.preventDefault();
//   const form = e.currentTarget;
//   dispatch(
//     logIn({
//       username: form.elements.name.value,
//       password: form.elements.password.value,
//     })
//   );
//   form.reset();
// };

// return (
//   <form onSubmit={handleSubmit} autoComplete="off">
//     <label>
//       Name
//       <input type="text" name="name" placeholder="Enter name ..." />
//     </label>
//     <label>
//       Password
//       <input type="password" name="password" placeholder="Enter password ..." />
//     </label>
//     <button type="submit">Log In</button>
//   </form>
// );
