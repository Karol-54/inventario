import { Router } from "express";
import { methodHTTP as productosController } from "../controllers/productos.controllers.js";
const router = Router();

router.get("/",productosController.getProductos);
router.delete("/:id",productosController.deleteProductos);
router.put("/:id",productosController.updateProductos);

export default router;