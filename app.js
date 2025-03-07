// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo(){
    let nombreamigo=document.getElementById("amigo").value;
    if (nombreamigo == "" ){
        alert("Por favor, inserte un nombre.");
        return;
    }
    amigos.push(nombreamigo);
    Actualizarlista();
    LimpiarCaja();
    
}

function LimpiarCaja(){
    document.querySelector(`#valorusuario `);
    valorCaja.value="";
}

function Actualizarlista(){
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // Limpiamos la lista antes de agregar los elementos

    // Usando un bucle for para recorrer la lista de amigos
    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement("li"); // Crear un elemento de lista
        li.textContent = amigos[i]; // Asignar el nombre del amigo al texto del elemento
        lista.appendChild(li); // Agregar el elemento de lista a la lista desordenada
    }
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("La lista de amigos está vacía.");
        return;
    }
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSeleccionado = amigos[indiceAleatorio];
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li>Amigo seleccionado: ${amigoSeleccionado}</li>`;
}
