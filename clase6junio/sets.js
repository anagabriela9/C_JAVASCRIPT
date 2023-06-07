//Crear un nuevo conjunto
const conjunto = new Set();

//Agregar elementos al conjunto
conjunto.add('elemento1');
conjunto.add('elemento2');
conjunto.add('elemento3');
conjunto.add('elemento3'); // No se agregarán duplicados

//Obtener el tamaño del conjunto
console.log('Tamaño del conjunto', conjunto.size);

//Comprobar si un elemento existe en el conjunto
console.log('¿Existe elemento2?',conjunto.has('elemento2'));

// Recorrer el conjunto utilizando un bucle for...of
for (const elemento of conjunto){
    console.log(elemento)
}