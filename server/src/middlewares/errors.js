import { ENV } from "../constants/index.js";
import { AppError, ServerError } from "../helpers/errors.js";

/**
 * @param {AppError | ServerError} err - Error
 */
const getErrorResponse = (err) => {
  const responseData = {
    success: false,
    message: err.message,
    code: err.code,
  };

  if (!err.isOperational) {
    // log error
    if (ENV === "development") {
      responseData.stack = err.error.stack;
    }
  }

  return responseData;
};

/**
 *
 * @param {AppError | ServerError | Error} err - Error Data
 * @param {import("express").Request} _req - Express Request
 * @param {import("express").Response} res - Express Response
 * @param {import("express").NextFunction} _next - Next Function
 */
export const errorHandler = (err, _req, res, _next) => {
  /** @type {AppError | ServerError} */
  let errorData = err;
  if (!(err instanceof AppError || err instanceof ServerError)) {
    errorData = new ServerError(err);
  }

  const response = getErrorResponse(errorData);

  return res.status(errorData.statusCode).json(response);
};
