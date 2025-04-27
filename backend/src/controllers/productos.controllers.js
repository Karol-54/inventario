import getConnection from './../db/database.js'

const getProductos = async (req,res)=>{
    try {
        const connection = await getConnection();
        const result = await connection.query('SELECT ProductoID, ProductoNombre, ProveedorID, CategoriaID, CantidadPorUnidad, PrecioUnitario, UnidadesStock, UnidadesPedidas, NivelReorden, Discontinuado FROM productos');
        res.json(result); 
    } catch (error) {
        console.log('ERROR 500');
    }
}

const deleteProductos = async (req,res)=>{
    try {
        console.log("id de producto a borrar: ", req.params);
        const {id} = req.params
        const connection = await getConnection();
        const result = await connection.query('DELETE FROM productos WHERE ProductoID = ?',id)
        res.json(result); 
    } catch (error) {
        console.log('ERROR 500');
    }
}

const updateProductos = async(req,res) =>{
    try{
        const {id} = req.params
        const {ProductoNombre, ProveedorID, CategoriaID, CantidadPorUnidad, PrecioUnitario, UnidadesStock, UnidadesPedidas, NivelReorden, Discontinuado} = req.body;
        const producto = {
            ProductoNombre, ProveedorID, CategoriaID, CantidadPorUnidad, PrecioUnitario, UnidadesStock, UnidadesPedidas, NivelReorden, Discontinuado
        }
        const connection = await getConnection();
        const result = await connection.query('UPDATE productos SET ? WHERE ProductoID = ?',[producto, id])
        res.json({result})
    }   catch (error) {
        console.log('ERROR 500');
    }
}

export const methodHTTP = {
    getProductos,
    deleteProductos,
    updateProductos
}