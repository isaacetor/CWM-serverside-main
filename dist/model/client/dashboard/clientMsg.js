"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.messageSchema = void 0;
const mongoose_1 = require("mongoose");
exports.messageSchema = new mongoose_1.Schema({
    date: {
        type: String,
    },
    sender: {
        type: String,
    },
    desc: {
        type: String,
        required: true,
    },
}, { timestamps: true });
const messageModel = (0, mongoose_1.model)("clientMessage", exports.messageSchema);
exports.default = messageModel;
