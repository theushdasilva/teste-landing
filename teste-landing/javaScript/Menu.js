/**
 * Funções do Menu
 */

function remorveOff(){
    var element = document.getElementById("Menu");
    element.classList.remove("off");
    console.log("ativado");
}

function addOff(){
    var element = document.getElementById("Menu");
    element.classList.add("off");
    console.log("ativado");
}