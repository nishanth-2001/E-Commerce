import express from "express";

import { validate } from "../../middlewares/index.js";
import {
  loginSchema,
  registrationSchema,
  verificationSchema,
} from "../../schemas/index.js";

import { loginHandler, registerHandler } from "../../controllers/auth.js";

const router = express.Router();

router.post("/register", validate(registrationSchema, "body"), registerHandler);

router.post("/login", validate(loginSchema, "body"), loginHandler);

router.post("/verify", validate(verificationSchema, "body"), (req, res) => {
  res.json({
    verified: true,
  });
});

router.post("/me", (req, res) => {
  let jwtSecretKey = process.env.JWT_SECRET_KEY;
  let data = {
    time: Date(),
    userId: 12,
  };

  const token = jwt.sign(data, jwtSecretKey);
  res.json({ token });
});

export default router;
