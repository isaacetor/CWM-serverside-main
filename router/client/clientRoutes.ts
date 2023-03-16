import { Router } from "express";

import {
  getOneClient,
  registerClient,
} from "../../controller/client/clientController";
import { registerValidation } from "../../middleware/validator/client/clientValidation";

const clientAuth = Router();

clientAuth.post("/clientregister", registerValidation, registerClient);
clientAuth.get("/:clientId", getOneClient);
export default clientAuth;
