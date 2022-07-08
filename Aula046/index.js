//setInterval e setTimeout

function mostraHora() {
    let data = new Date();

    return data.toLocaleTimeString('pt-BR', {
        hour12: false
    });
}

/* 
    Aqui a gente cria a funcão para utilizar a função mostra hora, mas não é necessário

    function funcaoDoInterval() {
    console.log(mostraHora());
    }

setInterval(funcaoDoInterval, 1000); 

*/

//Função anonima
setInterval(function () {
    console.log(mostraHora());
}, 1000);//O tempo é setado em milissegundos

/* CTRL + ALT + M = PARA A EXECUÇÃO DO CÓDIGO */

//Jogando o setInterval em uma variável
const timer = setInterval(function() {
    console.log(mostraHora());
}, 1000);

console.log('---===+++===---'); //Divisão
//Eu uso o setTimeout para parar a execução da função setInterval
setTimeout(function() {
    clearInterval(timer);
}, 3000); //Aqui é o tempo que ela vai levar para parar a execução

setTimeout(function() {
    console.log('Olá Mundo!');
}, 5000);