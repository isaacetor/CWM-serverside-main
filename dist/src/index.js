"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const db_1 = __importDefault(require("../config/db"));
const adminDashboardRoutes_1 = __importDefault(require("../router/admin/adminDashboardRoutes"));
const adminRoutes_1 = __importDefault(require("../router/admin/adminRoutes"));
const clientDashboardRoutes_1 = __importDefault(require("../router/client/clientDashboardRoutes"));
const clientRoutes_1 = __importDefault(require("../router/client/clientRoutes"));
const app_1 = __importDefault(require("./app"));
const PORT = process.env.PORT || 8000;
const app = (0, express_1.default)();
(0, app_1.default)(app);
(0, db_1.default)();
app.get("/", (req, res) => {
    return res.status(200).json({
        message: "api is available for consumption testing ",
    });
});
app.use("/api/clientauth", clientRoutes_1.default);
app.use("/api/adminauth", adminRoutes_1.default);
app.get("/api/default", (req, res) => {
    return res.status(200).json({
        message: "testing my app ",
    });
});
app.use("/clientdashboard", clientDashboardRoutes_1.default);
app.use("/admindasboard", adminDashboardRoutes_1.default);
app.listen(PORT, () => {
    console.log(`server is up on port ${PORT}`);
});
