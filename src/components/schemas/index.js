import * as yup from "yup";

// const phoneRegExp = /^\+380\d{9}$/;

export const orderSchema = yup.object({
  name: yup.string().min(2).max(16).required("Required"),
  surname: yup.string().min(2).max(16).required("Required"),
  adress: yup.string().required("Required"),
  phone: yup.string().required("Required"),
  // .matches(
  //   phoneRegExp,
  //   'The number must begin with "+380" and contain 9 more digits'
  // ),
});
