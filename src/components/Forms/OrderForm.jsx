import { useForm } from 'react-hook-form';
import { orderSchema } from '../schemas';
import { yupResolver } from '@hookform/resolvers/yup';
import { Order, Button, Warning } from './Forms.style';

function OrderForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(orderSchema),
  });
  console.log(errors);
  const onSubmit = event => {
    // console.log(event);
  };
  return (
    <Order onSubmit={handleSubmit(onSubmit)}>
      <label>
        <input autoFocus type="text" {...register('name')} placeholder="Name" />
        <Warning>{errors.name?.message}</Warning>
      </label>
      <label>
        <input type="text" {...register('surname')} placeholder="Surname" />
        <Warning>{errors.surname?.message}</Warning>
      </label>
      <label>
        <input type="text" {...register('adress')} placeholder="Adress" />
        <Warning>{errors.adress?.message}</Warning>
      </label>
      <label>
        <input type="tel" {...register('phone')} placeholder="+380951234567" />
        <Warning>{errors.phone?.message}</Warning>
      </label>

      <Button type="submit">Order</Button>
    </Order>
  );
}

export default OrderForm;
