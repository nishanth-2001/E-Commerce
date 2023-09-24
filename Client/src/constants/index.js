export const APP_NAME = import.meta.env.VITE_APP_NAME;

export const DEFAULT_INPUT_VARIANT = "outlined";

export const COUNTRY_CODE = "91";

export const API_URL = import.meta.env.VITE_API_URL;

export const ROUTES = Object.freeze({
  HOME: "/",
  AUTH: {
    LOGIN: "/login",
    REGISTER: "/register",
  },
  API: {
    AUTH: {
      REGISTER: "/api/vi/auth/register",
    },
  },
});
