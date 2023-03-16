"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const adminMessageSchema = new mongoose_1.default.Schema({
    sender: {
        type: String,
    },
    date: {
        type: String,
    },
    desc: {
        type: String,
    },
}, { timestamps: true });
const adminMessageModel = mongoose_1.default.model("adminMessage", adminMessageSchema);
exports.default = adminMessageModel;
