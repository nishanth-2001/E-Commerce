import * as yup from "yup";

export const loginSchema = yup.object({
  email: yup
    .string("Invalid Email")
    .email("Invalid Email")
    .required("Email is Required"),

  password: yup
    .string("Invalid Password")
    .min(8, "Password should be of minimum 8 characters")
    .required("Password is Required"),
});
