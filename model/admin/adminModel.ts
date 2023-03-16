import mongoose, { Document, model, Schema } from "mongoose";
import { adminDetails } from "../allInterface";
import isEmail from "validator/lib/isEmail";
interface admin extends adminDetails, Document {}

const adminSchema = new Schema<adminDetails>(
  {
    name: {
      type: String,
      required: [true, "please enter a name"],
    },
    email: {
      type: String,
      required: [true, "please enter a email"],
      unique: true,
      lowercase: true,
      validate: [isEmail, "Please enter a valid email address."],
      trim: true,
    },
    password: {
      type: String,
      required: [true, "Please enter a password"],
    },
    message: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "adminMessage",
      },
    ],
    paymentLog: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "adminPaymentLog",
      },
    ],
    notification: [],
    bills: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Bills",
      },
    ],
  },
  { timestamps: true }
);

const adminModel = model<admin>("adminModel", adminSchema);
export default adminModel;
