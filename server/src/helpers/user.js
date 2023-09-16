import User from "../models/User.js";

/**
 * converts user object to  user response
 * @param {import ("../models/User.js").User} user - userdata
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
 */
const createNewUser = async (inputData) => {
  const newUser = new User({
    firstName: inputData.firstName,
    lastName: inputData.lastName,
    email: inputData.email,
    password: inputData.password,
    phoneNumber: inputData.phoneNumber,
    gender: inputData.gender,
  });
  await newUser.save();

  return newUser;
};

export { createNewUser, makeUserResponse };
