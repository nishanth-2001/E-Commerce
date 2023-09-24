import * as yup from "yup";
import LoginSchema from "./login";

const RegistrationSchema = LoginSchema.shape({
  firstName: yup
    .string("Invalid First Name")
    .required("First Name is Required"),

  lastName: yup.string("Invalid Last Name"),

  email: yup
    .string("Invalid Email")
    .email("Invalid Email")
    .required("Email is Required"),

  password: yup
    .string("Invalid Password")
    .min(8, "Password should be of minimum 8 characters length")
    .required("Password is Required"),

  confirmPassword: yup
    .string("Invalid Confirm Password")
    .oneOf([yup.ref("password")], "Passwords Dont Match")
    .required("Confirm Password is Required"),

  phoneNumber: yup
    .string("Invalid Phone Number")

    .matches(/^[0-9-]+$/, "Invalid Phone Number")
    .required("Phone Number Required"),

  gender: yup
    .string("Invalid gender")
    .oneOf(["male", "female", "others"], "Invalid Gender")
    .required("Gender is Required"),
});

export default RegistrationSchema;
