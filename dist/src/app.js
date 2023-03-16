"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const error_1 = require("../middleware/error");
const clientRoutes_1 = __importDefault(require("../router/client/clientRoutes"));
const adminRoutes_1 = __importDefault(require("../router/admin/adminRoutes"));
const clientDashboardRoutes_1 = __importDefault(require("../router/client/clientDashboardRoutes"));
const adminDashboardRoutes_1 = __importDefault(require("../router/admin/adminDashboardRoutes"));
const appConfig = (app) => {
    app.use(express_1.default.json()).use((0, cors_1.default)());
    //routes
    app.use("/api/clientauth", clientRoutes_1.default);
    app.use("/api/adminauth", adminRoutes_1.default);
    //dashboard routes
    app.use("/clientdashboard", clientDashboardRoutes_1.default);
    app.use("/admindasboard", adminDashboardRoutes_1.default);
    //error handler : should be the last imported middleware in your application
    app.use(error_1.errorHandler);
};
exports.default = appConfig;
