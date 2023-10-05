import mongoose from "mongoose";
import dotenv from "dotenv";
import User from "./models/User.js";
dotenv.config();

const getActiveUserName = async () => {
  const users = await User.find({ active: true }).lean();
  const returnData = [];
  for (let i = 0; i < users.length; i++) {
    const user = users[i];
    returnData.push(user.name);
  }

  return returnData;
};

const getUserByEmail = async (inputEmail) => {
  const user = await User.findOne({ email: inputEmail }).lean();

  if (!user) {
    return "";
  }

  return user.name;
};

const getUsersAbove2500 = () => {};

const main = async () => {
  let conn;
  const inputEmail = "Justen.Kirlin@gmail.com";
  try {
    conn = await mongoose.connect(process.env.MONGODB_URL);

    const userName = await getUserByEmail(inputEmail);

    console.log(userName);
  } catch (err) {
    console.error(err);
  } finally {
    await conn?.disconnect();
  }
};

main();
