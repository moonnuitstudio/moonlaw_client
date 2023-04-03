import * as yup from "yup";

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
const passwordRegExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/

export const loginSchema = yup.object({
  email: yup.string().required('Please enter your email').email(),
  password: yup.string().required('Please enter your password').matches(passwordRegExp,"Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
  ),
}).required();