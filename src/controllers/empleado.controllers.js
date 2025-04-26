import getConnection from "./../db/database.js"

const getEmpleados = async (req, res)=>{
  try {
    const connection = await getConnection();
    const result = await connection.query("SELECT EmpleadoID, Nombre, Apellido FROM Empleados")
    res.json(result);
  } catch (error) {
    console.error("ERROR 500", error);
  }
 }

 const postEmpleados = async (req, res) => {
    try {
      const {EmpleadosNombre, Apellido} = req.body;
  
      const category = {EmpleadosNombre, Apellido}
  
      const connection = await getConnection();
  
      const result = await connection.query("INSERT INTO empleados SET ?", emplead )
      
      res.json(result)
  
    } catch (error) {
      console.error("ERROR 500");
    }
  
   }

   export const methodHTTP = {
    getEmpleados,
    postEmpleados
   }