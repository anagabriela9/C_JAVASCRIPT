let listaPeliculas = [];

const objPelicula = {
    id: '',
    titulo:'',
    genero: '',
    duracion: '',
    director: ''
};

let editando = false;

const formulario = document.querySelector('#formulario');
const tituloImput = document.querySelector('#titulo');
const generoImput = document.querySelector('#genero');
const duracionImput = document.querySelector('#duracion');
const directorImput = document.querySelector('#director');
const btnAgregar = document.querySelector('#ntnAgregar');

formulario.addEventListener('submit', validarFormulario);

function validarFormulario(e) {
    e.preventDefault();

    if(tituloImput.value === '' ||  generoImput.value === '' || duracionImput.value === '' || directorImput.value === '') {
        alert('Todos los campos son obligatorios.');
        return;
    }

    if(editando) {
        editarPelicula();
        editando = false;
    } else {
        objPelicula.id = Date.now();
        objPelicula.titulo = tituloImput.value;
        objPelicula.genero = generoImput.value;
        objPelicula.duracion = duracionImput.value;
        objPelicula.director = directorImput.value;

        agregarPelicula();
    }
}

function agregarPelicula() {
    listaPeliculas.push({...objPelicula});

    mostrarPeliculas();

    formulario.reset();

    limpiarObjeto();
}

function limpiarObjeto(){
    objPelicula.id = '';
    objPelicula.titulo = '';
    objPelicula.genero = '';
    objPelicula.duracion = '';
    objPelicula.director = '';
}

function mostrarPeliculas() {

    limpiarHTML();


    const divPeliculas = document.querySelector('.div-peliculas');

    listaPeliculas.forEach(pelicula => {
        const {id, titulo, genero, duracion, director} = pelicula;

        const parrafo = document.createElement('p');
        parrafo.textContent = `${id} ${titulo} ${genero} - ${duracion} - ${director} - `;
        parrafo.dataset.id = id;

        const editarBoton = document.createElement('button');
        editarBoton.onclick = () => cargarPelicula(pelicula);
        editarBoton.textContent = 'Editar';
        editarBoton.classList.add('btn' , 'btn-editar');
        parrafo.append(editarBoton);

        const eliminarBoton = document.createElement('button');
        eliminarBoton.onclick = () => eliminarPelicula(id);
        eliminarBoton.textContent = 'Eliminar';
        eliminarBoton.classList.add('btn' , 'btn-eliminar');
        parrafo.append(eliminarBoton);

        const hr = document.createElement('hr');

        divPeliculas.appendChild(parrafo);
        divPeliculas.appendChild(hr);


    });
}

function cargarPelicula(pelicula) {
    const { id,titulo , genero , duracion, director} = pelicula;

    tituloImput.value = titulo;
    generoImput.value = genero;
    duracionImput.value = duracion;
    directorImput.value = director;

    objPelicula.id = id;

    formulario.querySelector('button[type="submit"]').textContent = 'Actualizar';

    editando = true;
}

function editarPelicula() {
    objPelicula.titulo = tituloImput.value;
    objPelicula.genero = generoImput.value;
    objPelicula.duracion = duracionImput.value;
    objPelicula.director = directorImput.value;

    listaPeliculas.map( pelicula => {

        if(pelicula.id === objPelicula.id) {
            pelicula.id = objPelicula.id;
            pelicula.titulo = objPelicula.titulo;
            pelicula.genero = objPelicula.genero;
            pelicula.duracion = objPelicula.duracion;
            pelicula.director = objPelicula.director;
        }
    });

    limpiarHTML();
    mostrarPeliculas();

    formulario.reset();

    formulario.querySelector('button[type="submit"]').textContent = 'Agregar';

    editando = false;

}

function eliminarPelicula(id) {

    listaPeliculas = listaPeliculas.filter(pelicula => pelicula.id !== id);

    limpiarHTML();
    mostrarPeliculas();
}

/* function consultarPelicula(titulo){
    
    listaPeliculas = listaPeliculas.filter(pelicula => pelicula.titulo === titulo);

    limpiarHTML();
    mostrarPeliculas();
} */

function limpiarHTML() {
    const divPeliculas = document.querySelector('.div-peliculas');
    while(divPeliculas.firstChild) {
        divPeliculas.removeChild(divPeliculas.firstChild);
    }
}

