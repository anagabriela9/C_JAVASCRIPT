// Crear nodo de tipo Element
// Crear nodo de tipo text
// añadir el nodo Text como hijo del nodo tipo element
// añadir el nodo element como hijo de la pagina
function agregar(){
    let parrafo = document.createElement("p");
    let contenido = document.createTextNode("Lorem ipsum dolor sit amet, consectetur adip, lorem ipsum dolor, sed diam nonumy eirmod tempor invid id. Lorem ipsum dolor sit amet, consectet.");
    parrafo.appendChild(contenido);
    document.body.appendChild(parrafo);

// para agregar a un elemento ya existente
    let contenedor = document.querySelector("#primerDiv");
    contenedor.appendChild(parrafo);
}

function eliminar(){
    // para eliminar un elemento
    let elim = document.querySelector("p");
    elim.parentNode.removeChild(elim);
}