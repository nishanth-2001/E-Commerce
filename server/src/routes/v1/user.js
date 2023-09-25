import express from "express";

import { userHandler } from "../../controllers/user.js";

const router = express.Router();

router.get("/getAllUsers", userHandler);

export default router;
