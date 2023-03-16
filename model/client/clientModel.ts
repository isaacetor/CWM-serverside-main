import mongoose, { Document, Schema, model } from "mongoose";

import { clientDetails } from "../allInterface";
import isEmail from "validator/lib/isEmail";
interface client extends clientDetails, Document {}

const clientSchema = new Schema<clientDetails>({
  name: {
    type: String,
    required: [true, "please enter a name"],
  },
  address: {
    type: String,
  },
  clientType: {
    type: String,
  },
  email: {
    type: String,
    required: [true, "please enter a email"],
    unique: true,
    lowercase: true,
    validate: [isEmail, "Please enter a valid email address."],
    trim: true,
  },
  phoneNumber: {
    type: Number,
  },
  password: {
    type: String,
    required: [true, "Please enter a password"],
  },
  notification: [],

  message: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "clientMessage",
    },
  ],
  paymentLog: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "clientPaymentLog",
    },
  ],
  contact_us: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "clientContact",
    },
  ],
});

const clientModel = model<client>("clientModel", clientSchema);

export default clientModel;
