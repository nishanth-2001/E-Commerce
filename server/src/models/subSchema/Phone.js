import mongoose from "mongoose";

export const PhoneSchema = new mongoose.Schema(
  {
    number: {
      type: String,
      required: true,
    },
    code: {
      type: String,
      required: true,
    },
  },
  { _id: false, versionKey: false }
);
