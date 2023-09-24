import express from "express";

import { ERROR_TYPES, PORT } from "./constants/index.js";
import { errorHandler } from "./middlewares/index.js";
import router from "./routes/index.js";
import { AppError } from "./helpers/errors.js";
import { APP_URL } from "./constants/index.js";

import cors from "cors";

const initServer = () => {
  const app = express();

  app.use(cors({ origin: APP_URL }));

  app.use(express.json());

  app.use("/api", router);

  app.all("*", (_req, _res, next) => {
    return next(new AppError("Not Found", ERROR_TYPES.NOT_FOUND));
  });

  app.use(errorHandler);

  app.listen(PORT, () => {
    console.log(`Server Started On PORT => ${PORT}`);
  });
};

export default initServer;
