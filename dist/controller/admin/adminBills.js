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
exports.createBills = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const BillsModel_1 = __importDefault(require("../../model/admin/dashBoard/BillsModel"));
const clientModel_1 = __importDefault(require("../../model/client/clientModel"));
const adminModel_1 = __importDefault(require("../../model/admin/adminModel"));
const createBills = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b;
    try {
        const { amountIssued, date, amount, receiverName } = req.body;
        const getDate = new Date().toDateString();
        //get client details
        const getClient = yield clientModel_1.default.findById(req.params.clientId);
        //get admin details
        const getAdmin = yield adminModel_1.default.findById(req.params.adminId);
        if (getClient && getAdmin) {
            const bill = yield BillsModel_1.default.create({
                amountIssued,
                date: getDate,
                address: getClient === null || getClient === void 0 ? void 0 : getClient.address,
                receiverName: getClient === null || getClient === void 0 ? void 0 : getClient.name,
            });
            (_a = getClient === null || getClient === void 0 ? void 0 : getClient.bills) === null || _a === void 0 ? void 0 : _a.push(new mongoose_1.default.Types.ObjectId(bill === null || bill === void 0 ? void 0 : bill._id));
            getClient === null || getClient === void 0 ? void 0 : getClient.save();
            (_b = getAdmin === null || getAdmin === void 0 ? void 0 : getAdmin.bills) === null || _b === void 0 ? void 0 : _b.push(new mongoose_1.default.Types.ObjectId(bill === null || bill === void 0 ? void 0 : bill._id));
            getAdmin === null || getAdmin === void 0 ? void 0 : getAdmin.save();
            return res.status(200).json({
                message: "bill sent successfully",
                data: bill,
            });
        }
        else {
            return res.status(404).json({
                message: "couldn't send bill",
            });
        }
    }
    catch (error) {
        return res.status(400).json({
            message: "could not create bills",
            data: error.message,
        });
    }
});
exports.createBills = createBills;
