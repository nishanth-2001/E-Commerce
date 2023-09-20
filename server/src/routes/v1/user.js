import express from "express";

const router = express.Router();

router.get("/user", "body"),
  (req, res) => {
    res.json({
      resister: true,
    });
  };
