import { useForm } from 'react-hook-form';
import { registrationSchema } from '../schemas';
import { yupResolver } from '@hookform/resolvers/yup';
import { Form, Button, Warning, FormGroup } from './Forms.style';

export const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(registrationSchema),
  });
  const onSubmit = data => {
    const newUser = data;
    console.log(newUser);
    reset();
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
      <FormGroup>
        Username
        <input
          type="text"
          {...register('username')}
          placeholder="Enter name ..."
        />
      </FormGroup>
      <Warning>{errors.username?.message}</Warning>
      <FormGroup>
        Email
        <input
          type="email"
          {...register('email')}
          placeholder="Enter email ..."
        />
      </FormGroup>
      <Warning>{errors.email?.message}</Warning>
      <FormGroup>
        Password
        <input
          type="password"
          {...register('password')}
          placeholder="Enter password ..."
        />
      </FormGroup>
      <Warning>{errors.password?.message}</Warning>
      <Button type="submit">Register</Button>
    </Form>
  );
};
