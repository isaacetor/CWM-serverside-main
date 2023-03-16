"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const clientController_1 = require("../../controller/client/clientController");
const clientValidation_1 = require("../../middleware/validator/client/clientValidation");
const clientAuth = (0, express_1.Router)();
clientAuth.post("/clientregister", clientValidation_1.registerValidation, clientController_1.registerClient);
clientAuth.get("/:clientId", clientController_1.getOneClient);
exports.default = clientAuth;
