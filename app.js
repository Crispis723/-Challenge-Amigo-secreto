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