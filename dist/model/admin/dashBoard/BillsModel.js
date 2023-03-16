"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const billsSchema = new mongoose_1.Schema({
    receiverName: {
        type: String,
    },
    address: {
        type: String,
    },
    date: {
        type: String,
    },
    amountIssued: {
        type: Number,
    },
});
const BillsModel = (0, mongoose_1.model)("Bills", billsSchema);
exports.default = BillsModel;
