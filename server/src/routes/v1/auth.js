import express from "express";

import { validate } from "../../middlewares/index.js";
import { loginSchema, registrationSchema } from "../../schemas/index.js";

import { registerHandler } from "../../controllers/auth.js";

const router = express.Router();

router.post("/register", validate(registrationSchema, "body"), registerHandler);

router.post("/login", validate(loginSchema, "body"), (req, res) => {
  res.json({
    resister: true,
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
