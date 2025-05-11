/* Importamos al framework express*/
import express from "express";
import cors from "cors"
import categoriaRoutes from "./routes/categorias.routes.js"  
import empleadoRoutes from "./routes/empleados.routes.js"  
import clienteRouter from "./routes/clientes.routes.js"  

/* Asignamos a app toda funcionalidad para mi server web*/
const app = express();

/* setear un puerto a mi web server */
app.set("port", 5000);

app.use(express.json());

app.use(cors());

/* routes */
app.use("/api/categorias",categoriaRoutes)
app.use("/api/empleados",empleadoRoutes)
app.use("/api/clientes",clienteRouter)

app.get('/',(req,res)=>{
    res.send('REST API EN RENDER WITHOUT DATABASE ENDPOINTS')
})

/* hacemos disponible a mi server app para toda la aplicacion */
export default app;