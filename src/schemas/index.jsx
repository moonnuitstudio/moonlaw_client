import * as yup from "yup";

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
const passwordRegExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@_#\$%\^&\*])(?=.{8,})/

export const loginSchema = yup.object({
  email: yup.string().required('Email is required').email(),
  password: yup.string().matches(passwordRegExp,"Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"),
}).required();

export const signupSchema = yup.object({
  firstname: yup.string().required('First name is required'),
  email: yup.string().required('Email is required').email(),
  lawfirm: yup.string().required('Law firm\'s name is required').min(5, 'Must be at least 5 leght'),
}).required();

export const setPasswordSchema = yup.object({
  password: yup.string().matches(passwordRegExp,"Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"),
  confirmpassword: yup.string().oneOf([yup.ref('password'), null], 'Passwords must match'),
}).required();

export const recoverPasswordSchema = yup.object({
  email: yup.string().required('Email is required').email(),
}).required();
