import { Router } from "express";
import { methodHTTP as empleadosController } from "../controllers/empleados.controllers.js";
const router = Router();

router.get("/",empleadosController.getEmpleados);
router.post("/",empleadosController.postEmpleados);
router.get("/:id",empleadosController.getEmpleado);
router.delete("/:id",empleadosController.deleteEmpleado);
router.put("/:id",empleadosController.updateEmpleados);

export default router;