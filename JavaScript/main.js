//Escrita automatica no primeiro h1;
const texto = "O sabor da Margherita";
const elementoTexto = document.getElementById("tituloAnimado");
let index = 0;
function digitar() {
    if (index < texto.length) {
        elementoTexto.innerHTML += texto.charAt(index);
        index++;
        setTimeout(digitar, 150); //Velocidade de digitação em ms;
    }
}
//Escrita automatica no primeiro p;
const subtitle = "Há 20 anos na gastronomia Brasileira";
const elementSubtitle = document.getElementById("subtituloAnimado");
let valueSub = 0;
function escrever() {
    if (valueSub < subtitle.length) {
        elementSubtitle.innerHTML += subtitle.charAt(valueSub);
        valueSub++;
        setTimeout(escrever, 150);
    }
}
window.onload = function () {
    digitar();
    setTimeout(escrever, 3300);
};

