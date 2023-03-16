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
exports.getOneClient = exports.registerClient = void 0;
const asyncHandler_1 = require("../../utils/asyncHandler");
const clientModel_1 = __importDefault(require("../../model/client/clientModel"));
const AppError_1 = require("../../utils/AppError");
exports.registerClient = (0, asyncHandler_1.asyncHandler)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, address, clientType, email, phoneNumber, password } = req.body;
    const client = yield clientModel_1.default.create({
        name,
        address,
        clientType,
        email,
        phoneNumber,
        password,
    });
    if (!client) {
        next(new AppError_1.AppError({
            message: "Failed to create client",
            httpCode: AppError_1.HttpCode.BAD_REQUEST,
            name: AppError_1.AppError.name,
        }));
    }
    return res.status(201).json({
        message: "Client created",
        data: client,
    });
}));
const getOneClient = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const client = yield clientModel_1.default.findById(req.params.clientId).populate([
            {
                path: "message",
            },
            {
                path: "bills",
            },
        ]);
        return res.status(200).json({
            message: " populated all data",
            data: client,
        });
    }
    catch (error) {
        return res.status(400).json({
            message: "failed to get admin",
            data: error.message,
        });
    }
});
exports.getOneClient = getOneClient;
