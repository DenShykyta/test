import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { orderSchema } from '../schemas';
import { yupResolver } from '@hookform/resolvers/yup';
import { FormOrder, Button, Warning, FormGroup } from './Forms.style';
import { getCartList } from '../../redux/products/productsSelectors';
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
    <FormOrder onSubmit={handleSubmit(onSubmit)}>
      <FormGroup>
        Name
        <input autoFocus type="text" {...register('name')} placeholder="Name" />
        <Warning>{errors.name?.message}</Warning>
      </FormGroup>
      <FormGroup>
        Surname
        <input type="text" {...register('surname')} placeholder="Surname" />
        <Warning>{errors.surname?.message}</Warning>
      </FormGroup>
      <FormGroup>
        Adress
        <input type="text" {...register('adress')} placeholder="Adress" />
        <Warning>{errors.adress?.message}</Warning>
      </FormGroup>
      <FormGroup>
        Phone
        <input type="tel" {...register('phone')} placeholder="+380951234567" />
        <Warning>{errors.phone?.message}</Warning>
      </FormGroup>

      <Button type="submit">Order</Button>
    </FormOrder>
  );
}

export default OrderForm;
