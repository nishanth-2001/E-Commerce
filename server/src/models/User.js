import mongoose from "mongoose";
import { nanoid } from "nanoid";

import { ENUMS, ROLES } from "../constant.js";
import { ERR_MESSAGE } from "../constant.js";

import { PhoneSchema } from "./subSchema/index.js";

/**
 * @typedef {import("mongoose").InferSchemaType<typeof UserSchema>} User - User Data
 * @typedef {import("mongoose").HydratedDocument<User>} UserDocument - user document
 */

/**
 * @typedef {Omit<User, "_id"|"password"|"__v"|"role"|"active">} UserResponse - Response User Data
 */

const UserSchema = new mongoose.Schema({
  uid: {
    type: String,
    required: true,
    unique: true,
    default: () => nanoid(),
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    default: null,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: PhoneSchema,
    required: true,
  },
  roles: {
    type: String,
    enum: ENUMS.ROLE,
    default: ROLES.CUSTOMER,
  },
  gender: {
    type: String,
    enum: ENUMS.GENDER,
    required: true,
  },

  active: {
    type: Boolean,
    required: true,
    default: true,
  },

  verified: {
    type: Boolean,
    required: true,
    default: false,
  },

  verificationCode: {
    type: String,
    required: true,
    default: () => nanoid(50),
  },

  verifiedCreatedAt: {
    type: Date,
    required: true,
  },

  verifiedAt: {
    type: Date,
    default: null,
  },
});

UserSchema.index(
  { phoneNumber: 1 },
  { unique: true, name: ERR_MESSAGE.UNIQUE.USER_PHONE_NUMBER_UNIQUE.NAME }
);
UserSchema.index(
  { email: 1 },
  { unique: true, name: ERR_MESSAGE.UNIQUE.USER_EMAIL_UNIQUE.NAME }
);

export default mongoose.model("User", UserSchema);
