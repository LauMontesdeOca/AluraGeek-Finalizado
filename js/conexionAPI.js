


async function listarProductos(){
    const conexion = await fetch ("http://localhost:3000/productos");

    const conexionConvertida=conexion.json();

    return conexionConvertida;
    
}

async function enviarProducto(id,nombre,precio,condicion,url_imagen){
    const conexion= await fetch ("http://localhost:3000/productos",{
        method:"POST",
        headers:{"Content-type":"application/json"},
        body:JSON.stringify({
            id:id,
            nombre:nombre,
            precio:precio,
            condicion: condicion,
            url_imagen: url_imagen
        })
    })
    const conexionConvertida = conexion.json();

    return conexionConvertida;
}
const borrarProducto = async(id) =>{
    try {
        const res= await fetch(`http://localhost:3000/productos/${id}`,{
        method: "DELETE"
    });
    return await res.json();
} catch(err) {
    return console.log(err);
}
}
// async function eliminarTarjeta(id)  {
//     const conexion = await fetch(`"http://localhost:3000/productos"${id}`, 
//         {method: "DELETE",
//         headers: {"Content-type":"application/json"}
//     })
// console.log ("elimine tarjeta")}

export const conexionAPI={
    listarProductos, enviarProducto, borrarProducto
}