import * as yup from "yup";
import { loginSchema } from "./login.js";

export const registrationSchema = loginSchema.shape({
  firstName: yup
    .string("Invalid First Name")
    .required("First Name is Required"),

  lastName: yup.string("Invalid Last Name"),

  phoneNumber: yup
    .string("Invalid Phone Number")
    .length(10, "Invalid Phone Number")
    .matches(/^[6-9]/, "Invalid Phone Number")
    .required("Phone Number Required"),

  gender: yup
    .string("Invalid gender")
    .oneOf(["male", "female", "others"], "Invalid Gender")
    .required("Gender is Required"),
});
