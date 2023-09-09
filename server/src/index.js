import initServer from "./server.js";
import connectMongo from "./lib/db.js";

const main = async () => {
  await connectMongo();
  initServer();
};

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
