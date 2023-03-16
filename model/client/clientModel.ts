import mongoose, { Document, Schema, model } from "mongoose";

import { clientDetails } from "../allInterface";

interface client extends clientDetails, Document {}

const clientSchema = new Schema<clientDetails>({
  name: {
    type: String,
  },
  address: {
    type: String,
  },
  clientType: {
    type: String,
  },
  email: {
    type: String,
  },
  phoneNumber: {
    type: Number,
  },
  password: {
    type: String,
  },
  notification: {
    type: [],
  },
  role: {
    type: String,
    enum: ["admin", "client"],
  },
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
