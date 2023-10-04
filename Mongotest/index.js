import dotenv from "dotenv";

dotenv.config();

import mongoose from "mongoose";
import { faker } from "@faker-js/faker";
import { DateTime } from "luxon";

import User from "./models/User.js";
import Order from "./models/Order.js";

const dateFormat = "dd-MM-yyyy";

const getRandomDOB = () => {
  const dateString = DateTime.fromJSDate(faker.date.birthdate()).toFormat(
    dateFormat
  );
  const date = DateTime.fromFormat(dateString, dateFormat, { zone: "UTC" });

  return date.toJSDate();
};

const getRandomPrice = () => {
  const isFloat = faker.datatype.boolean();
  if (isFloat) {
    return faker.number.float({ min: 200, max: 4000, precision: 0.01 });
  }
  return faker.number.int({ min: 200, max: 4000 });
};

const getRandomRole = () => {
  const roles = ["admin", "manager", "employee"];
  const index = faker.number.int({ min: 0, max: roles.length - 1 });

  return roles[index];
};

const getRandomStatus = () => {
  const status = [
    "in-progress",
    "delivered",
    "cancelled",
    "returned",
    "completed",
  ];
  const index = faker.number.int({ min: 0, max: status.length - 1 });

  return status[index];
};

const getRandomUser = () => {
  const user = new User({
    name: faker.person.fullName(),
    email: faker.internet.email(),
    dob: getRandomDOB(),
    role: getRandomRole(),
    gender: faker.person.sexType(),
    active: faker.datatype.boolean(),
  });

  return user;
};

const getRandomReturnDays = () => {
  const days = [7, 15, 30, 45];
  const index = faker.number.int({ min: 0, max: days.length - 1 });

  return days[index];
};

const generateOrderForUser = (user) => {
  const orderStatus = getRandomStatus();
  const orderReturnDays = getRandomReturnDays();
  const orderedAt = faker.date.between({
    from: DateTime.fromFormat("01-01-2020", dateFormat, {
      zone: "UTC",
    }).toJSDate(),
    to: DateTime.fromFormat("10-10-2023", dateFormat, {
      zone: "UTC",
    }).toJSDate(),
  });
  const expDeliveryDate = DateTime.fromJSDate(orderedAt)
    .plus({ days: faker.number.int({ min: 4, max: 10 }) })
    .toJSDate();

  let orderDeliveredAt = null;
  let orderReturnedAt = null;
  let orderCancelledAt = null;
  let orderCompletedAt = null;

  if (
    orderStatus === "delivered" ||
    orderStatus === "completed" ||
    orderStatus === "returned"
  ) {
    const randInt = faker.number.int({ min: 1, max: 10 });
    if (randInt <= 7) {
      const deliveryDate = faker.number.int({ min: 1, max: 3 });
      orderDeliveredAt = DateTime.fromJSDate(expDeliveryDate)
        .minus({ days: deliveryDate })
        .toJSDate();
    } else {
      const deliveryDate = faker.number.int({ min: 2, max: 10 });
      orderDeliveredAt = DateTime.fromJSDate(expDeliveryDate)
        .plus({ days: deliveryDate })
        .toJSDate();
    }
  }

  if (orderStatus === "cancelled") {
    const deliveryDate = faker.number.int({ min: 1, max: 7 });
    orderCancelledAt = DateTime.fromJSDate(orderedAt)
      .plus({ days: deliveryDate })
      .toJSDate();
  }

  if (orderStatus === "completed") {
    orderCompletedAt = DateTime.fromJSDate(orderDeliveredAt)
      .plus({ days: orderReturnDays })
      .toJSDate();
  }

  if (orderStatus === "returned") {
    const returnDate = faker.number.int({ min: 1, max: orderReturnDays - 1 });
    orderReturnedAt = DateTime.fromJSDate(orderDeliveredAt)
      .plus({ days: returnDate })
      .toJSDate();
  }

  const order = new Order({
    userId: user.uid,
    status: orderStatus,
    price: getRandomPrice(),
    returnDays: orderReturnDays,
    expectedDeliveryDate: expDeliveryDate,
    deliveredAt: orderDeliveredAt,
    returnedAt: orderReturnedAt,
    cancelledAt: orderCancelledAt,
    completedAt: orderCompletedAt,
    orderedAt: orderedAt,
  });

  return order;
};

const insertData = async () => {
  const newUser = getRandomUser();

  await newUser.save();

  for (let i = 0; i < faker.number.int({ min: 1, max: 15 }); i++) {
    const newOrder = generateOrderForUser(newUser);
    await newOrder.save();
  }
};

const main = async () => {
  let conn;
  try {
    conn = await mongoose.connect(process.env.MONGODB_URL);
    for (let i = 0; i < 10; i++) {
      await insertData();
    }
  } catch (err) {
    console.error(err);
  } finally {
    await conn?.disconnect();
  }
};

main();
