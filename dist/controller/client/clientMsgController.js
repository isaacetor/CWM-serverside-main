"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllClientMsg = exports.sendMessageToAdmin = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const adminModel_1 = __importDefault(require("../../model/admin/adminModel"));
const clientModel_1 = __importDefault(require("../../model/client/clientModel"));
const clientMsg_1 = __importDefault(require("../../model/client/dashboard/clientMsg"));
//create or send a message
const sendMessageToAdmin = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        const { sender, date, desc } = req.body;
        //getting the time and date
        const getDate = new Date().toDateString();
        //getting the user details
        const getUser = yield clientModel_1.default.findById(req.params.userId);
        //getting admin details
        const getAdmin = yield adminModel_1.default.findById(req.params.adminId);
        if (getUser && getAdmin) {
            const newMsg = yield clientMsg_1.default.create({
                sender: getUser === null || getUser === void 0 ? void 0 : getUser.name,
                date: getDate,
                desc,
            });
            yield ((_a = getUser === null || getUser === void 0 ? void 0 : getUser.message) === null || _a === void 0 ? void 0 : _a.push(new mongoose_1.default.Types.ObjectId(newMsg === null || newMsg === void 0 ? void 0 : newMsg._id)));
            getUser === null || getUser === void 0 ? void 0 : getUser.save();
            yield adminModel_1.default.findByIdAndUpdate(getAdmin._id, {
                $push: { notification: newMsg._id },
            });
            return res.status(201).json({
                message: "message successfully sent",
                data: newMsg,
            });
        }
        else {
            return res.status(404).json({
                message: "User or admin not found",
            });
        }
    }
    catch (error) {
        return res.status(400).json({
            message: "bad request , unable to send message",
            data: error,
        });
    }
});
exports.sendMessageToAdmin = sendMessageToAdmin;
const getAllClientMsg = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const client = yield clientMsg_1.default.find();
        return res.status(200).json({
            message: "message successfully gotten",
            data: client,
        });
    }
    catch (error) {
        return res.status(400).json({
            message: "bad request , unable to get all message",
            data: error,
        });
    }
});
exports.getAllClientMsg = getAllClientMsg;
