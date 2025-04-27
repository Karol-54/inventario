import { Router } from "express";
import { methodHTTP as clienteController } from "../controllers/clientes.controllers.js";
const router = Router();

router.get("/",clienteController.getClients);
router.post("/",clienteController.postClients);
router.get("/:id",clienteController.getClient);
router.delete("/:id",clienteController.deleteClient);
router.put("/:id",clienteController.updateClients);

export default router;