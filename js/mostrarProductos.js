import { conexionAPI } from "./conexionAPI.js"


const lista = document.querySelector("[data-lista]")


function crearCard(id, nombre, precio, condicion, url_imagen) {
    const producto = document.createElement("li");
    producto.className = "productos_item";
    producto.innerHTML = `
        <img src="${url_imagen}" class="img_producto" alt="Camiseta">
        <div class="descripcion_producto">
            <h5>${nombre}</h5>
            <p>Valor: U$D ${precio}</p>
            <p>Condicion: ${condicion}</p>
            <p>ID del Pruducto: ${id}</p>
            <img src="icon/btn-eliminar.png" alt="boton eliminar" class="btn-eliminar" data-eliminar=${id} >
            
        </div>`;

    const botonEliminar = producto.querySelector(".btn-eliminar");
    botonEliminar.addEventListener("click", () => {
        conexionAPI.borrarProducto(id)
            .then(() => {
                producto.remove();
            })
            .catch(err => console.log(err));
    });

    lista.appendChild(producto);
    return producto;
}

async function listarProductos() {
    const listaAPI = await conexionAPI.listarProductos()

    listaAPI.forEach(producto => lista.appendChild(crearCard(producto.id,producto.nombre, producto.precio, producto.condicion, producto.url_imagen)));
}

listarProductos()
