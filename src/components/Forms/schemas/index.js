import * as yup from 'yup';

// const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,16}$/;

const emailRegExp = /.+@.+\..+/i;
const nameRegExp = /^[a-zа-яё]{2,16}$/i;
const phoneRegExp = /^\+380\d{9}$/;

export const orderSchema = yup.object({
  name: yup.string().min(2).max(16).required('Required'),
  surname: yup.string().min(2).max(16).required('Required'),
  adress: yup.string().required('Required'),
  phone: yup
    .string()
    .required('Required')
    .matches(phoneRegExp, '+380XXXXXXXXX'),
});

export const loginSchema = yup.object().shape({
  username: yup.string().min(2).max(16).required('Required'),
  password: yup
    .string()
    // .matches(passwordRules, 'Not valid password')
    .required('Required'),
});

export const registrationSchema = yup.object().shape({
  username: yup
    .string()
    .required('Required')
    .matches(nameRegExp, 'The name must contain a maximum of 16 letters'),
  email: yup
    .string()
    .trim()
    .required('Required')
    .matches(emailRegExp, 'Enter a valid Email'),
  password: yup
    .string()
    // .matches(passwordRules, 'Not valid password')
    .required('Required'),
});
