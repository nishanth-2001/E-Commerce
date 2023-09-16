import { ValidationError } from "yup";

import { AppError, ServerError } from "../helpers/errors.js";
import { ERROR_TYPES } from "../constant.js";

/**
 * @param {Error|ValidationError} err - Error Object
 */
const handleValidationErr = (err) => {
  if (err instanceof ValidationError) {
    const errMsg = err.errors[0];
    return new AppError(errMsg, ERROR_TYPES.BAD_REQUEST);
  } else {
    return new ServerError(err);
  }
};

/**
 * @param {import("yup").Schema} schema - Yup Schema
 * @param {"query"|"body"|"params"} type - Data to which to be considered for validation
 */
export const validate = (schema, type) => {
  /**
   * @param {import("express").Request} req - Express Request
   * @param {import("express").Response} _res - Express Response
   * @param {import("express").NextFunction} next - Next Function
   */
  return async (req, _res, next) => {
    try {
      const parsedData = schema.cast(req[type], {
        stripUnknown: false,
        assert: false,
      });
      await schema.validate(parsedData, { strict: true });
      req[type] = parsedData;
      return next();
    } catch (err) {
      const errData = handleValidationErr(err);
      return next(errData);
    }
  };
};
