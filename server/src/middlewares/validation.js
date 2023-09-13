import { ValidationError } from "yup";

const handleValidationErr = (err) => {
  if (err instanceof ValidationError) {
    return err.errors[0];
  } else {
    return [];
  }
};

export const validate = (schema, type) => {
  return async (req, res, next) => {
    try {
      const parsedData = schema.cast(req[type]);
      await schema.validate(parsedData);
      req[type] = parsedData;
      return next();
    } catch (err) {
      const errData = handleValidationErr(err);
      return res.json(errData);
      //error handle
    }
  };
};
