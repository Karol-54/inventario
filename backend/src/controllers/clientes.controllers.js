import getConnection from './../db/database.js'

const getClients = async (req,res)=>{
    try {
        const connection = await getConnection();
        const result = await connection.query('SELECT ClienteID, Compania, Contacto, Titulo, Direccion, Ciudad, Regiones, CodigoPostal, Pais, Telefono, Fax FROM clientes')
        res.json(result); 
    } catch (error) {
        console.log('ERROR 500');
    }
}

const postClients = async(req,res) =>{
    try{
        const {ClienteID, Compania, Contacto, Titulo, Direccion, Ciudad, Regiones, CodigoPostal, Pais, Telefono, Fax} = req.body;
        const client = {
            ClienteID, Compania, Contacto, Titulo, Direccion, Ciudad, Regiones, CodigoPostal, Pais, Telefono, Fax
        }
        const connection = await getConnection();
        const result = await connection.query('INSERT INTO clientes SET ?',client)
        res.json({result})
    }   catch (error) {
        console.log('ERROR 500');
    }
}

const getClient = async (req,res)=>{
    try {
        console.log(req.params);
        const {id} = req.params
        const connection = await getConnection();
        const result = await connection.query('SELECT ClienteID, Compania, Contacto, Titulo, Direccion, Ciudad, Regiones, CodigoPostal, Pais, Telefono, Fax FROM clientes WHERE ClienteID = ?',id)
        res.json(result); 
    } catch (error) {
        console.log('ERROR 500');
    }
}
const deleteClient = async (req,res)=>{
    try {
        console.log("id de cliente a borrar: ", req.params);
        const {id} = req.params
        const connection = await getConnection();
        const result = await connection.query('DELETE FROM clientes WHERE ClienteID = ?',id)
        res.json(result); 
    } catch (error) {
        console.log('ERROR 500');
    }
}

const updateClients = async(req,res) =>{
    try{
        const {id} = req.params
        const {Compania, Contacto, Titulo, Direccion, Ciudad, Regiones, CodigoPostal, Pais, Telefono, Fax} = req.body;
        const cliente = {
            Compania, Contacto, Titulo, Direccion, Ciudad, Regiones, CodigoPostal, Pais, Telefono, Fax
        }
        const connection = await getConnection();
        const result = await connection.query('UPDATE clientes SET ? WHERE ClienteID = ?',[cliente, id])
        res.json({result})
    }   catch (error) {
        console.log('ERROR 500');
    }
}

export const methodHTTP = {
    getClients,
    postClients,
    getClient,
    deleteClient,
    updateClients
}