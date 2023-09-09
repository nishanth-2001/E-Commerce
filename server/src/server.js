import express from "express";
import { PORT } from "./constant.js";
import authRouter from "../src/routes/v1/auth.js";

const initServer = () => {
  const app = express();

  app.use(express.json());

  app.use("/auth", authRouter);

  app.get("/", (req, res) => {
    res.json({
      hello: "1",
    });
  });

  app.all("*", (req, res) => {
    res.status(404).json({
      status: "FAILED",
      message: "Not Found",
    });
  });

  app.listen(PORT, () => {
    console.log(`Server Started On PORT => ${PORT}`);
  });
};

export default initServer;
