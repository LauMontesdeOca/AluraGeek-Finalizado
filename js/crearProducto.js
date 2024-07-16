import { conexionAPI } from "./conexionAPI.js";
const formulario = document.querySelector("[data-formulario]");

async function crearProducto(event){
    event.preventDefault();
    const id = document.querySelector("[data-id]").value;
    const nombre = document.querySelector("[data-nombre]").value;
    const precio = document.querySelector("[data-precio]").value;
    const condicion = document.querySelector("[data-condicion]").value;
    const url_imagen = document.querySelector("[data-url_imagen]").value;

    await conexionAPI.enviarProducto(id,nombre,precio,condicion,url_imagen);
}

formulario.addEventListener("submit", event => crearProducto(event))