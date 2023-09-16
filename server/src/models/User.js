import mongoose from "mongoose";
import { nanoid } from "nanoid";

import { ENUMS, ROLES } from "../constant.js";

/**
 * @typedef {import("mongoose").InferSchemaType<typeof UserSchema>} User - User Data
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
    default: "",
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  phoneNumber: {
    number: {
      type: String,
      required: true,
    },
    code: {
      type: String,
      required: true,
    },
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
});

UserSchema.index({ phoneNumber: 1 }, { unique: true });

export default mongoose.model("User", UserSchema);
