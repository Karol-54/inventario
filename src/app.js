/* Importamos al framework express*/
import express from "express";

/* Asiganmos a app toda funcionalidad para mi server web*/
const app = express();

/* setear un puerto a mi web server */
app.set("port", 5000);

app.use((req, res, next) => {
    console.log("🛠 Middleware ejecutado para:", req.method, req.url);
    next();
  });


/* hacemos disponible a mi server app para toda la aplicacion */
export default app;