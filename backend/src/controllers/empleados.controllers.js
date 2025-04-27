import getConnection from './../db/database.js'

const getEmpleados = async (req,res)=>{
    try {
        const connection = await getConnection();
        const result = await connection.query('SELECT EmpleadoID, Apellido, Nombre, Titulo, TituloCortesia, FechaNacimiento, FechaContratacion, Direccion, Ciudad, Regiones, CodigoPostal, Pais, Telefono, Extension, Foto, Notas, Jefe, RutaFoto FROM empleados');
        res.json(result); 
    } catch (error) {
        console.log('ERROR 500');
    }
}

const postEmpleados = async(req,res) =>{
    try{
        const {Apellido, Nombre, Titulo, TituloCortesia, FechaNacimiento, FechaContratacion, Direccion, Ciudad, Regiones, CodigoPostal, Pais, Telefono, Extension, Foto, Notas, Jefe, RutaFoto} = req.body;
        const empleado = {
            Apellido, Nombre, Titulo, TituloCortesia, FechaNacimiento, FechaContratacion, Direccion, Ciudad, Regiones, CodigoPostal, Pais, Telefono, Extension, Foto, Notas, Jefe, RutaFoto
        }
        const connection = await getConnection();
        const result = await connection.query('INSERT INTO empleados SET ?',empleado)
        res.json({result})
    }   catch (error) {
        console.log('ERROR 500',error);
    }
}

const getEmpleado = async (req,res)=>{
    try {
        console.log(req.params);
        const {id} = req.params
        const connection = await getConnection();
        const result = await connection.query('SELECT EmpleadoID, Apellido, Nombre, Titulo, TituloCortesia, FechaNacimiento, FechaContratacion, Direccion, Ciudad, Regiones, CodigoPostal, Pais, Telefono, Extension, Foto, Notas, Jefe, RutaFoto FROM empleados WHERE EmpleadoID = ?',id)
        res.json(result); 
    } catch (error) {
        console.log('ERROR 500');
    }
}
const deleteEmpleado = async (req,res)=>{
    try {
        console.log("id de empleado a borrar: ", req.params);
        const {id} = req.params
        const connection = await getConnection();
        const result = await connection.query('DELETE FROM empleados WHERE EmpleadoID = ?',id)
        res.json(result); 
    } catch (error) {
        console.log('ERROR 500');
    }
}

const updateEmpleados = async(req,res) =>{
    try{
        const {id} = req.params
        const {Apellido, Nombre, Titulo, TituloCortesia, FechaNacimiento, FechaContratacion, Direccion, Ciudad, Regiones, CodigoPostal, Pais, Telefono, Extension, Foto, Notas, Jefe, RutaFoto} = req.body;
        const empleado = {
            Apellido, Nombre, Titulo, TituloCortesia, FechaNacimiento, FechaContratacion, Direccion, Ciudad, Regiones, CodigoPostal, Pais, Telefono, Extension, Foto, Notas, Jefe, RutaFoto
        }
        const connection = await getConnection();
        const result = await connection.query('UPDATE empleados SET ? WHERE EmpleadoID = ?',[empleado, id])
        res.json({result})
    }   catch (error) {
        console.log('ERROR 500');
    }
}

export const methodHTTP = {
    getEmpleados,
    postEmpleados,
    getEmpleado,
    deleteEmpleado,
    updateEmpleados
}