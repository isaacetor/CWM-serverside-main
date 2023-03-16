"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.clientSchemaValidator = void 0;
const joi_1 = __importDefault(require("joi"));
exports.clientSchemaValidator = {
    register: joi_1.default.object({
        name: joi_1.default.string().required(),
        email: joi_1.default.string().email().trim().lowercase().required(),
        password: joi_1.default.string().min(4).required(),
        phoneNumber: joi_1.default.number().required(),
    }),
    login: joi_1.default.object({
        email: joi_1.default.string().email().trim().lowercase().required(),
        password: joi_1.default.string().min(6).required(),
    }),
};
