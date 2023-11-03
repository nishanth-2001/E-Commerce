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
  const status = await Order.find({ status: "completed" });
  //status =>[{userId,price,status,returnDays}]
  const returnData = [];

  for (let i = 0; i < status.length; i++) {
    const order = status[i];
    //order=>[{userId:"",price:"",status}]

    returnData.push({
      orderStatus: order.status,
      orderPrice: `Rs ${order.price}`,
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

const getGenderCount = async () => {
  const users = await User.find({}).lean();
  const genderCount = {};
  users.forEach((user) => {
    const userGender = user.gender;
    if (genderCount.hasOwnProperty(userGender)) {
      genderCount[userGender] = genderCount[userGender] + 1;
    } else {
      genderCount[userGender] = 1;
    }
  });

  return genderCount;
};

const getRoleByCount = async () => {
  const roleByCount = await User.aggregate([
    {
      $group: {
        _id: "$role",
        roleCount: {
          $sum: 1,
        },
      },
    },
  ]);
  //{admin: 9 employee: 5, manager: 6}
  const roleCount = {};
  for (let i = 0; i < roleByCount.length; i++) {
    roleCount[roleByCount[i]._id] = roleByCount[i].roleCount;
  }
  /**
   * same as above
   */
  // const roleCount = roleByCount.reduce((acc, role) => {
  //   acc[role.id] = role.count
  //   return acc

  // },{})

  return roleCount;
};

const getAllGenderByRole = async () => {
  const users = await User.find({}).lean();

  const genderCount = {};
  //{ female: 16, male: 4 }
  // users = [{ id:1, gender: 'male' }, { id: 2, gender: 'male' }, { id: 3, gender: 'female' }, { id: 4, gender: 'male' }]
  users.forEach((user) => {
    // { male:2, female:1 }
    const userGender = user.gender;

    const userRole = user.role;

    //userGender=male
    if (genderCount.hasOwnProperty(userGender)) {
      if (genderCount[userGender][userRole]) {
        genderCount[userGender][userRole] =
          genderCount[userGender][userRole] + 1;
      } else {
        genderCount[userGender][userRole] = 1;
      }
    } else {
      genderCount[userGender] = {};
      genderCount[userGender][userRole] = 1;
    }
    //{male:3 ,female:1}
  });
  // -> {male:2, female:1}

  //same as above

  //   const genderCount = users.reduce((acc, user) => {
  //     if (acc[user.gender]) {
  //         if (acc[user.gender][user.role]) {
  //             acc[user.gender][user.role] = acc[user.gender][user.role] + 1
  //         } else {
  //             acc[user.gender][user.role] = 1
  //         }
  //     } else {
  //         acc[user.gender] = {}
  //         acc[user.gender][user.role] = 1
  //     }

  //     return acc;
  // }, {})

  return genderCount;
};

const getAllGenderByRoleUser = async () => {
  const users = await User.aggregate([
    {
      $group: {
        _id: {
          gender: "$gender",
          role: "$role",
        },
        count: { $sum: 1 },
      },
    },
  ]);
  //[{id:1,gender:male,role:admin}]
  // console.log(JSON.stringify(users, null, 2));

  // {male:{admin:2,manager:1}, female}
  const gender = {};

  for (let i = 0; i < users.length; i++) {
    // console.log(users[i]);
    const userGender = users[i]._id.gender;
    const userRole = users[i]._id.role;
    const userCount = users[i].count;
    // gender[role[i].count] = gender[i].role;
    if (gender.hasOwnProperty(userGender)) {
      gender[userGender][userRole] = userCount;
    } else {
      gender[userGender] = {};
      gender[userGender][userRole] = userCount;
    }
  }

  return gender;
};

const getOrderAndUserInfo = async () => {
  const orders = await Order.find(
    { status: "cancelled" },
    { uid: 1, userId: 1, price: 1 }
  ).lean();

  const returnData = [];
  // for (let i = 0; i < orders.length; i++) {
  //  const order = orders[i];
  //  console.log(order)
  //  const user = await User.findOne({ uid: order.userId }, { name: 1 }).lean();
  //  returnData.push({
  //    orderId: order.uid,
  //    userId: order.userId,
  //    userName: user.name,
  //    orderPrice: `Rs.${order.price}`,
  //  })
  // }

  // const userIds = [];
  // for (let i = 0; i < orders.length; i++) {
  //  const order = orders[i];
  //  userIds.push(order.userId);
  // }

  // const userIds = orders.map(order => {
  //  return order.userId
  // });

  const userIds = orders.map((order) => order.userId);

  const users = await User.find({ gender: true }, { uid: 1, name: 1 }).lean();
  console.log(users);

  return returnData;
};

const getTotalOfStatusOfOrders = async () => {
  const orders = await Order.find({}).lean();

  const totalCount = {};

  orders.forEach((order) => {
    const orderStatus = order.status;
    const orderPrice = order.price;
    //totalCount={"cancelled"}
    //
    if (totalCount.hasOwnProperty(orderStatus)) {
      totalCount[orderStatus] = totalCount[orderStatus] + orderPrice;
    } else {
      totalCount[orderStatus] = orderPrice;
    }
  });

  return totalCount;
};

const getAvgOfStatusOfOrders = async () => {
  const orders = await Order.find({}).lean();
  const totalCount = {};

  orders.forEach((order) => {
    const orderStatus = order.status;
    const orderPrice = order.price;
  });

  return totalCount;
};

const getMaxOfStatusOfOrders = async () => {
  const orders = await Order.find({}).lean();
  const totalCount = {};
  let maxId = 0;

  orders.forEach((order) => {
    const orderStatus = order.status;
    const orderPrice = order.price;

    if (totalCount.hasOwnProperty(orderStatus)) {
      // if (order.price > maxId) {
      //   maxId = order.price;
      // } else {
      //   order.price > totalCount;
      //   totalCount[orderStatus] = [orderPrice];
      // }
      totalCount[orderStatus] =
        totalCount[orderStatus] > orderPrice
          ? totalCount[orderStatus]
          : orderPrice;

      //
    } else {
      totalCount[orderStatus] = orderPrice;
    }
  });

  return totalCount;
};

const getMinOfStatusOfOrders = async () => {
  const orders = await Order.find({}).lean();
  const totalCount = {};

  orders.forEach((order) => {
    const orderStatus = order.status;
    const orderPrice = order.price;
    if (totalCount.hasOwnProperty(orderStatus)) {
      totalCount[orderStatus][orderPrice];
    } else {
      totalCount[orderStatus] = {};
      totalCount[orderStatus][orderPrice];
    }
  });

  return totalCount;
};

const getTotalOfStatusOfOrdersAgg = async () => {
  const orders = await Order.aggregate([
    {
      $group: {
        _id: "$status",
        TotalAmount: { $sum: "$price" },
      },
    },
  ]);
};

const getAvgOfStatusOfOrdersAgg = async () => {
  const orders = await Order.aggregate([
    {
      $group: {
        _id: "$status",
        avgAmount: { $avg: "$price" },
      },
    },
  ]);
};

const getMaxOfStatusOfOrdersAgg = async () => {
  const orders = await Order.aggregate([
    {
      $group: {
        _id: "$status",
        maxAmount: { $max: "$price" },
      },
    },
  ]);
};

const getMinOfStatusOfOrdersAgg = async () => {
  const orders = await Order.aggregate([
    {
      $group: {
        _id: "$status",
        minAmount: { $min: "$price" },
      },
    },
  ]);
};

const main = async () => {
  let conn;

  try {
    conn = await mongoose.connect(process.env.MONGODB_URL);

    const status = await getMaxOfStatusOfOrders();
    console.log(status);
  } catch (err) {
    console.error(err);
  } finally {
    await conn?.disconnect();
  }
};

main();
