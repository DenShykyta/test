import { useForm } from "react-hook-form";
import { orderSchema } from "../schemas";
import { yupResolver } from "@hookform/resolvers/yup";
import { Order } from "./OrderForm.style";

function OrderForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(orderSchema),
  });

  const onSubmit = (data) => console.log(data);
  return (
    <Order onSubmit={handleSubmit(onSubmit)}>
      <label>
        <input type="text" {...register("name")} placeholder="Name" />
        <p>{errors.name?.message}</p>
      </label>
      <label>
        <input type="text" {...register("surname")} placeholder=" Surname" />
        <p>{errors.surname?.message}</p>
      </label>
      <label>
        <input type="text" {...register("adress")} placeholder="Adress" />
        <p>{errors.adress?.message}</p>
      </label>
      <label>
        <input type="tel" {...register("phone")} placeholder="Phone" />
        <p>{errors.phone?.message}</p>
      </label>
      <button type="submit">Order</button>
    </Order>
  );
}

export default OrderForm;
