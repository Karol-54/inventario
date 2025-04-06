import { Router } from "express";
import { methodHTTP as categoriaController} from "../controllers/categoria.controllers.js";

/* crearemos el enrutador */
const router = Router ();

/* configuramos respuesta desde server metodo http get */
router.get("/", categoriaController.getCategorias)
   


/* hacemos disponible a router en toda la app */
export default router;