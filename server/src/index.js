import dotenv from "dotenv";
dotenv.config();

import initServer from "./server.js";

const main = async () => {
  initServer();
};

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
