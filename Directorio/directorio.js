let listaPersonas = [];

const objPersona = {
    id: '',
    nombre:'',
    correo: '',
    telefono: ''
};

let editando = false;

const formulario = document.querySelector('#formulario');
const nombreImput = document.querySelector('#nombre');
const correoImput = document.querySelector('#correo');
const telImput = document.querySelector('#telefono');
const btnAgregar = document.querySelector('#ntnAgregar');

formulario.addEventListener('submit', validarFormulario);

function validarFormulario(e) {
    e.preventDefault();

    if(nombreImput.value === '' ||  correoImput.value === '' || telImput.value === '') {
        alert('Todos los campos son obligatorios.');
        return;
    }

    if(editando) {
        editarPersona();
        editando = false;
    } else {
        objPersona.id = Date.now();
        objPersona.nombre = nombreImput.value;
        objPersona.correo = correoImput.value;
        objPersona.telefono = telImput.value;

        agregarPersona();
    }
}

function agregarPersona() {
    listaPersonas.push({...objPersona});

    mostrarPersonas();

    formulario.reset();

    limpiarObjeto();
}

function limpiarObjeto(){
    objPersona.id = '';
    objPersona.nombre = '';
    objPersona.correo = '';
    objPersona.telefono = '';
}

function mostrarPersonas() {

    limpiarHTML();


    const divPersonas = document.querySelector('.div-personas');

    listaPersonas.forEach(persona => {
        const {id, nombre, correo, telefono} = persona;

        const parrafo = document.createElement('p');
        parrafo.textContent = `${id} ${nombre} ${correo} - ${telefono} - `;
        parrafo.dataset.id = id;

        const editarBoton = document.createElement('button');
        editarBoton.onclick = () => cargarPersona(persona);
        editarBoton.textContent = 'Editar';
        editarBoton.classList.add('btn' , 'btn-editar');
        parrafo.append(editarBoton);

        const eliminarBoton = document.createElement('button');
        eliminarBoton.onclick = () => eliminarPersona(id);
        eliminarBoton.textContent = 'Eliminar';
        eliminarBoton.classList.add('btn' , 'btn-eliminar');
        parrafo.append(eliminarBoton);

        const hr = document.createElement('hr');

        divPersonas.appendChild(parrafo);
        divPersonas.appendChild(hr);


    });
}

function cargarPersona(persona) {
    const { id,nombre , correo , telefono} = persona;

    nombreImput.value = nombre;
    correoImput.value = correo;
    telImput.value = telefono;

    objPersona.id = id;

    formulario.querySelector('button[type="submit"]').textContent = 'Actualizar';

    editando = true;
}

function editarPersona() {
    objPersona.nombre = nombreImput.value;
    objPersona.correo = correoImput.value;
    objPersona.telefono = telImput.value;

    listaPersonas.map( persona => {

        if(persona.id === objPersona.id) {
            persona.id = objPersona.id;
            persona.nombre = objPersona.nombre;
            persona.correo = objPersona.correo;
            persona.telefono = objPersona.telefono;
        }
    });

    limpiarHTML();
    mostrarPersonas();

    formulario.reset();

    formulario.querySelector('button[type="submit"]').textContent = 'Agregar';

    editando = false;

}

function eliminarPersona(id) {

    listaPersonas = listaPersonas.filter(persona => persona.id !== id);

    limpiarHTML();
    mostrarPersonas();
}

function limpiarHTML() {
    const divPersonas = document.querySelector('.div-personas');
    while(divPersonas.firstChild) {
        divPersonas.removeChild(divPersonas.firstChild);
    }
}

