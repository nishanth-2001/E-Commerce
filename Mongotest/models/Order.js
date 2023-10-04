import mongoose from "mongoose";
import { nanoid } from "nanoid";

const OrderSchema = new mongoose.Schema({
  uid: {
    type: String,
    required: true,
    unique: true,
    default: () => nanoid(),
  },
  userId: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  status: {
    type: String,
    required: true,
    enum: ["in-progress", "delivered", "cancelled", "returned", "completed"],
  },
  returnDays: {
    type: Number,
    required: true,
  },
  expectedDeliveryDate: {
    type: Date,
    required: true,
  },
  deliveredAt: {
    type: Date,
    required: false,
    default: null,
  },
  returnedAt: {
    type: Date,
    required: false,
    default: null,
  },
  cancelledAt: {
    type: Date,
    required: false,
    default: null,
  },
  completedAt: {
    type: Date,
    required: false,
    default: null,
  },
  orderedAt: {
    type: Date,
    required: true,
  },
});

const Order = mongoose.model("Order", OrderSchema);

export default Order;
