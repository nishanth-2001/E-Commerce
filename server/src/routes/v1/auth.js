import express from "express";
import jwt from "jsonwebtoken";

const router = express.Router();

router.post("/register", (req, res) => {
  res.json({
    resister: true,
  });
});

router.post("/login", (req, res) => {
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

router.get("/user/validateToken", (req, res) => {
  // Tokens are generally passed in header of request
  // Due to security reasons.

  let tokenHeaderKey = process.env.TOKEN_HEADER_KEY;
  let jwtSecretKey = process.env.JWT_SECRET_KEY;

  try {
    const token = req.header(tokenHeaderKey);

    const verified = jwt.verify(token, jwtSecretKey);
    if (verified) {
      return res.json("Successfully Verified");
    } else {
      // Access Denied
      return res.status(401).send(error);
    }
  } catch (error) {
    // Access Denied
    return res.status(401).send(error);
  }
});

export default router;
