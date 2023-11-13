import { useForm } from "react-hook-form";
import { orderSchema } from "../schemas";
function OrderForm() {
  const { register, handleSubmit } = useForm({
    defaultValues: { name: "Sasha" },
    reValidateMode: { orderSchema },
  });

  const onSubmit = (data) => console.log(data);
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>
        Name
        <input type="text" {...register("name")} />
      </label>
      <label>
        Surname
        <input type="text" {...register("Surname")} />
      </label>
      <label>
        Adress
        <input type="text" {...register("adress")} />
      </label>
      <label>
        Phone number
        <input type="tel" {...register("phone")} />
      </label>
      <button type="submit">Order</button>
    </form>
  );
}

export default OrderForm;
