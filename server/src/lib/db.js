import mongoose from "mongoose";

import { MONGODB_URL } from "../constant.js";

const connectMongo = async () => {
  await mongoose.connect(MONGODB_URL);
  console.log("Connected to Mongo Database");
};

export default connectMongo;
