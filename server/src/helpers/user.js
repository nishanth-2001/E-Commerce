import User from "../models/User.js";

import argon2, { verify } from "argon2";

/**
 * converts user object to  user response
 * @param {import ("../models/User.js").UserDocument | import ("../models/User.js").User} user - userdata
 * @returns {import ("../models/User.js").UserResponse}
 */
const makeUserResponse = (user) => {
  return {
    uid: user.uid,
    firstName: user.firstName,
    lastName: user.lastName,
    email: user.email,
    phoneNumber: user.phoneNumber,
    gender: user.gender,
    createdAt: user.createdAt,
    updatedAt: user.updatedAt,
  };
};

/**
 * creates a new user
 * @param {import("../schemas/register.js").RegistrationInputType} inputData -data of new user
 * @returns {Promise<import("../models/User.js").UserDocument}
 */
const createNewUser = async (inputData) => {
  const hashedPassword = await argon2.hash(inputData.password);
  const newUser = new User({
    firstName: inputData.firstName,
    lastName: inputData.lastName,
    email: inputData.email,
    password: hashedPassword,
    phoneNumber: inputData.phoneNumber,
    gender: inputData.gender,
    verificationCreatedAt: new Date(),
  });
  await newUser.save();

  return newUser;
};

export { createNewUser, makeUserResponse };
