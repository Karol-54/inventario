import { Router } from "express";
import { methodHTTP as clienteController} from "../controllers/cliente.controllers.js";

/* crearemos el enrutador */
const router = Router ();


router.post("/", clienteController.postClientes); /* para crud - create */
export default router;
