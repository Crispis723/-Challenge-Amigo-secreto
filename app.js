// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo() {
    let nombreamigo=document.getElementById("amigo");
    if (nombreamigo == "" ){
        alert("Por favor, inserte un nombre.");
        return;
    }
    amigos.push(nombreamigo);
    LimpiarCaja();
}

function LimpiarCaja(){
    document.querySelector(`#valorusuario `);
    valorCaja.value="";
}

function Actualizarlista(){
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";//limpiamos la lista
    for (let i = 0; i <amigos.length; i++) {
        let li = document.createElement("li");
        li.textContent=amigos[i]

    }
}

function sortearamigos(){
    
}