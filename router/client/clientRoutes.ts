import { Router } from "express";

import { registerClient } from "../../controller/client/clientController";
import { registerValidation } from "../../middleware/validator/client/clientValidation";

const clientAuth = Router();

clientAuth.post("/clientregister", registerValidation, registerClient);

export default clientAuth;
