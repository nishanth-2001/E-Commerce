import express from "express";

import { validate } from "../../middlewares/index.js";
import { loginSchema, registrationSchema } from "../../schemas/index.js";

const router = express.Router();

router.post("/register", validate(registrationSchema), (req, res) => {
  res.json({
    resister: true,
  });
});

router.post("/login", validate(loginSchema), (req, res) => {
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
