import express from "express";
const router = express.Router();

const userHandler = router.get("/getAllUsers", async (req, res) => {
  try {
    const users = await users.findAll();
    res.json(users);
  } catch (error) {
    console.error(" not found users:", error);
    res.status(404).json({ error: "Not Found" });
  }
});

export { userHandler };
