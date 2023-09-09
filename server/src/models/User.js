import mongoose from "mongoose";
import { nanoid } from "nanoid";

import { ENUMS } from "../constant.js";

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
    unique: true,
  },
  phoneNumber: {
    type: String,
    required: true,
    unique: true,
  },
  roles: {
    type: String,
    enum: ENUMS.ROLES,
    default: ENUMS.ROLES.CUSTOMER,
  },
  gender: {
    type: String,
    enum: ENUMS.GENDER,
    required: true,
  },
});

export default mongoose.model("User", UserSchema);
