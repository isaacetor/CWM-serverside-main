"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.genToken = exports.secret = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
exports.secret = "isaacisveryannoying";
const genToken = (user) => {
    jsonwebtoken_1.default.sign(user, exports.secret, { expiresIn: "1h" });
};
exports.genToken = genToken;
