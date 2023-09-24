import express from "express";

import User from "../../models/User.js";

const router = express.Router();

router.get("/getAllUser", async (req, res) => {
  try {
    const getAllUser = await User.find();
    res.json(getAllUser);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
});

export default router;
