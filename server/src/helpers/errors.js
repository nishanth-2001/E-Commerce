import { ERROR_TYPES } from "../constant.js";

/**
 * @typedef {Object} ErrorCodeType - Map of Error Types
 * @property {String} ErrorCodeType.CODE - Error Code
 * @property {Number} ErrorCodeType.STATUS_CODE - Error Status Code
 */

/**
 * @typedef {"NOT_FOUND"|"BAD_REQUEST"|"UNAUTHORIZED"|"FORBIDDEN"|"METHOD_NOT_ALLOWED"|"INTERNAL_SERVER_ERROR"|"CONFLICT"} Errors - List of Errors
 */

/**
 * @typedef {Record<Errors, ErrorCodeType>} ErrorMap - Error Status Map
 */

/**
 * @typedef {Object} ErrorObj - Error Input Data
 * @property {String} errorObj.message - Error Message
 * @property {Number} errorObj.statusCode - Status Code
 * @property {String} errorObj.code - Error Code
 * @property {Error=} errorObj.error - Error Object
 * @property {Boolean} errorObj.isOperational - Is this an operational error
 */

class CustomError extends Error {
  /**
   * @param {ErrorObj} errorObj - Error Data
   */
  constructor(errorObj) {
    const { code, error, message, statusCode, isOperational } = errorObj;
    super(message);
    this.code = code;
    this.statusCode = statusCode;
    this.error = error;
    this.isOperational = isOperational;
  }
}

class AppError extends CustomError {
  /**
   * @param {String} message - Error Message
   * @param {ErrorCodeType} errorMap - Error Status Map
   */
  constructor(message, errorMap) {
    super({
      message,
      code: errorMap.CODE,
      statusCode: errorMap.STATUS_CODE,
      isOperational: true,
    });
  }
}

class ServerError extends CustomError {
  /**
   * @param {Error} error - Error Object
   * @param {String} message - Error Message
   * @param {ErrorCodeType} errorMap - Error Status Map
   */
  constructor(
    error,
    message = "Internal Server Error",
    errorMap = ERROR_TYPES.INTERNAL_SERVER_ERROR
  ) {
    super({
      message,
      error,
      code: errorMap.CODE,
      statusCode: errorMap.STATUS_CODE,
      isOperational: false,
    });
  }
}

export { AppError, ServerError };
