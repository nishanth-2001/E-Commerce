import * as yup from "yup";

export const verificationSchema = yup
  .object({
    token: yup
      .string("Invalid token")

      .required("token is required"),
  })
  .noUnknown(true);
