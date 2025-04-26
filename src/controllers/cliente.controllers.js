import getConnection from "./../db/database.js"


const postClientes = async (req, res) => {
    try {
      const {Compania, Contacto, Titulo,Direccion,Ciudad,Regiones,CodigoPostal,Pais,Telefono} = req.body;
  
      const cliente = {Compania, Contacto, Titulo, Direccion, Ciudad, Regiones, CodigoPostal, Pais, Telefono}
  
      const connection = await getConnection();
  
      const result = await connection.query("INSERT INTO clientes SET ?", cliente )
      
      res.json(result)
  
    } catch (error) {
      console.error("ERROR 500", error);
    }
  
   }



   export const methodHTTP = {
    postClientes
   }