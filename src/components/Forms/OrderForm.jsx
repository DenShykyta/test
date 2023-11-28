import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { orderSchema } from './schemas';
import { yupResolver } from '@hookform/resolvers/yup';
import { Form, Button, Warning, FormGroup } from './Forms.style';
import { getCartList } from '../../redux/cart/selectors';

function OrderForm({ onSubmitForm }) {
  const cartItems = useSelector(getCartList);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(orderSchema),
  });

  const onSubmit = data => {
    Notify.success(`Thank you for your order, ${data.name} ${data.surname}!`);
    reset();
    onSubmitForm();
    console.log([data, cartItems]);
  };
  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormGroup>
        Name
        <input
          autoFocus
          type="text"
          {...register('name')}
          placeholder="Enter name ..."
        />
        <Warning>{errors.name?.message}</Warning>
      </FormGroup>
      <FormGroup>
        Surname
        <input
          type="text"
          {...register('surname')}
          placeholder="Enter surname ..."
        />
        <Warning>{errors.surname?.message}</Warning>
      </FormGroup>
      <FormGroup>
        Adress
        <input
          type="text"
          {...register('adress')}
          placeholder="Enter adress ..."
        />
        <Warning>{errors.adress?.message}</Warning>
      </FormGroup>
      <FormGroup>
        Phone
        <input type="tel" {...register('phone')} placeholder="+380951234567" />
        <Warning>{errors.phone?.message}</Warning>
      </FormGroup>

      <Button type="submit">Order</Button>
    </Form>
  );
}

export default OrderForm;
