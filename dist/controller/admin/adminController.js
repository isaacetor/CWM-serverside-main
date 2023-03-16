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
exports.registerAdmin = void 0;
const asyncHandler_1 = require("../../utils/asyncHandler");
const adminModel_1 = __importDefault(require("../../model/admin/adminModel"));
const AppError_1 = require("../../utils/AppError");
exports.registerAdmin = (0, asyncHandler_1.asyncHandler)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, email, password } = req.body;
    const admin = yield adminModel_1.default.create({
        name,
        email,
        password,
    });
    if (!admin) {
        next(new AppError_1.AppError({
            message: "Failed to create admin",
            httpCode: AppError_1.HttpCode.BAD_REQUEST,
            name: AppError_1.AppError.name,
        }));
    }
    return res.status(201).json({
        message: "admin created",
        data: admin,
    });
}));
