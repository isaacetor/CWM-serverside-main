import { Router } from "express";

import {
  getOneClient,
  loginClient,
  registerClient,
} from "../../controller/client/clientController";
import {
  loginValidation,
  registerValidation,
} from "../../middleware/validator/client/clientValidation";

const clientAuth = Router();

clientAuth.post("/clientregister", registerValidation, registerClient);
clientAuth.get("/:clientId", getOneClient);
clientAuth.post("/clientlogin", loginClient);
export default clientAuth;
