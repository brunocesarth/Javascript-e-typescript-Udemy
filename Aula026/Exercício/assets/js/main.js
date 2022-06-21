function calculaIMC(x, y) {
    resultado = x / (y * y);
    return resultado;
}

console.log(resultado);

const peso = document.querySelector('.peso');
const altura = document.querySelector('.altura');

const botao = document.querySelector(button);
botao.onclick = calculaIMC(peso, alutra);