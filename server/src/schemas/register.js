import * as yup from "yup";
import { loginSchema } from "./login.js";

/**
 * @typedef {import("yup").InferType<typeof registrationSchema>} RegistrationInputType - Registration Input
 */

export const registrationSchema = loginSchema
  .shape({
    firstName: yup
      .string("Invalid First Name")
      .required("First Name is Required"),

    lastName: yup.string("Invalid Last Name"),

    phoneNumber: yup
      .object({
        number: yup
          .string("Invalid Phone Number")
          .matches(/^[0-9\-]+$/, "Invalid Phone Number")
          .required("Phone Number Required"),
        code: yup
          .string("Invalid Country Code")
          .matches(/^[0-9\-]+$/, "Invalid Country Code")

          .required("Country Coder Required"),
      })
      .required("Phone Number is required"),
    gender: yup
      .string("Invalid gender")
      .oneOf(["male", "female", "others"], "Invalid Gender")
      .required("Gender is Required"),
  })
  .noUnknown(true);
