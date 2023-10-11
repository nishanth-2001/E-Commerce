import mongoose from "mongoose";
import dotenv from "dotenv";
import User from "./models/User.js";
import Order from "./models/Order.js";
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

const getOrdersAbove2500 = async () => {
  const dbData = await Order.find({
    price: {
      $gte: 2500,
    },
  });
  const returnData = [];
  for (let i = 0; i < dbData.length; i++) {
    const data = dbData[i];
    returnData.push(data.price);
  }
  return returnData;
};

const getStatusOfOrders = async () => {
  const status = await Order.count({
    status: { $in: ["cancelled"] },
  });
  //status =>[{userId,price,status,returnDays}]
  const returnData = [];
  for (let i = 0; i < status.length; i++) {
    const order = status[i];
    //order=>[{userId:"",price:"",status}]

    returnData.push({
      orderId: order.uid,
      userName: order.name,
      userId: order.userId,
    });
  }
  return returnData;
};

const getRolesOfUsers = async () => {
  const roles = await User.find({
    roles: { $in: ["admin", "manager", "employee"] },
  });
};

const getRoleCount = async () => {
  const users = await User.find({}).lean();
  const roleCount = {};
  users.forEach((user) => {
    // for (let i = 0; i < users.length; i++) {
    //   const user = users[i];
    // }

    const userRole = user.role;
    if (roleCount.hasOwnProperty(userRole)) {
      roleCount[userRole] = roleCount[userRole] + 1;
    } else {
      roleCount[userRole] = 1;
    }
  });
  return roleCount;
};

const main = async () => {
  let conn;

  try {
    conn = await mongoose.connect(process.env.MONGODB_URL);

    const roleByCount = await getRoleCount();
    console.log(roleByCount);
  } catch (err) {
    console.error(err);
  } finally {
    await conn?.disconnect();
  }
};

main();
