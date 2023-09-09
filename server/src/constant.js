import dotenv from "dotenv";

dotenv.config();

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
