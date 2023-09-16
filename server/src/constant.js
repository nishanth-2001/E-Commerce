import dotenv from "dotenv";

dotenv.config();

export const ENV = process.env.NODE_ENV || "development";

export const MONGODB_URL = process.env.MONGODB_URL;

export const PORT = Number(process.env.PORT || 4000);

export const ROLES = {
  ADMIN: "admin",
  CUSTOMER: "customer",
};

export const ENUMS = {
  GENDER: ["male", "female", "other"],
  ROLE: Object.values(ROLES),
};

/** @type {import("./helpers/errors.js").ErrorMap} */
export const ERROR_TYPES = {
  NOT_FOUND: { CODE: "NOT_FOUND", STATUS_CODE: 404 },
  BAD_REQUEST: { CODE: "BAD_REQUEST", STATUS_CODE: 400 },
  UNAUTHORIZED: { CODE: "UNAUTHORIZED", STATUS_CODE: 401 },
  FORBIDDEN: { CODE: "FORBIDDEN", STATUS_CODE: 403 },
  METHOD_NOT_ALLOWED: { CODE: "METHOD_NOT_ALLOWED", STATUS_CODE: 405 },
  INTERNAL_SERVER_ERROR: { CODE: "INTERNAL_SERVER_ERROR", STATUS_CODE: 500 },
};
