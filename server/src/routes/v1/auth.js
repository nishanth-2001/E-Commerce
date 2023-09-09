import express from "express";

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

router.get("/me", (req, res) => {
  const token = req.query.token;
  res.json({
    resister: true,
  });
});

export default router;
