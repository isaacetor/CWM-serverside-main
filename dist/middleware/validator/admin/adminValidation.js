"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.adminLoginvalidation = exports.adminRegistervalidation = void 0;
const validator_1 = require("../validator");
const adminSchema_1 = require("./adminSchema");
const adminRegistervalidation = (req, res, next) => {
    (0, validator_1.validator)(adminSchema_1.adminSchemaValidator.register, req.body, next);
};
exports.adminRegistervalidation = adminRegistervalidation;
const adminLoginvalidation = (req, res, next) => {
    (0, validator_1.validator)(adminSchema_1.adminSchemaValidator.login, req.body, next);
};
exports.adminLoginvalidation = adminLoginvalidation;
