"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginValidation = exports.registerValidation = void 0;
const validator_1 = require("../validator");
const clientSchema_1 = require("./clientSchema");
const registerValidation = (req, res, next) => {
    (0, validator_1.validator)(clientSchema_1.clientSchemaValidator.register, req.body, next);
};
exports.registerValidation = registerValidation;
const loginValidation = (req, res, next) => {
    (0, validator_1.validator)(clientSchema_1.clientSchemaValidator.login, req.body, next);
};
exports.loginValidation = loginValidation;
