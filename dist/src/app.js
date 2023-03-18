"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const error_1 = require("../middleware/error");
const appConfig = (app) => {
    app.use(express_1.default.json()).use((0, cors_1.default)());
    //routes
    //dashboard routes
    //error handler : should be the last imported middleware in your application
    app.use(error_1.errorHandler);
};
exports.default = appConfig;
