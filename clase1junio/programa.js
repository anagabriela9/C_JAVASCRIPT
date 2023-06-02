// Crear nodo de tipo Element
// Crear nodo de tipo text
// añadir el nodo Text como hijo del nodo tipo element
// añadir el nodo element como hijo de la pagina

let parrafo = document.createElement("p");
var contenido = document.createTextNode("Hola!");
parrafo.appendChild(contenido);
document.body.appendChild(parrafo);

// para agregar a un elemento ya existente
var contenedor = document.getElementById("primerDiv");
contenedor.appendChild(parrafo);

// para eliminar un elemento
var elim = document.getElementById("para eliminar");