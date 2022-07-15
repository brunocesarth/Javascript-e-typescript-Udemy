//Declaração de função (Function hoisting)
//hoisting - a engine do JavaScript eleva as declarações de funções e variáveis definidas com a palavra VAR, para o topo do js

falaOi();//Aqui eu chamo a função antes de declarar ela, como aconteceu o hoisting, isso é possível

function falaOi() {
    console.log('Oie');
} //Aqui eu poderia retornar um valor

falaOi();

//Funções são First-class objects(Objetos de primeira classe) = a função pode ser tratada como dado
//Function expression
//Exemplo
const souUmDado = function () {
    console.log('Sou um dado.');
};
souUmDado();

//Passei uma função para a função, e executei essa função
function executaFuncao(funcao) {
    console.log('Vou executar sua função abaixo:');
    funcao();
}

executaFuncao(souUmDado);

//Arrow function
const funcaoArrow = () => {
    console.log('Sou uma arrow function.');
};
funcaoArrow();

//Dentro de um objeto
//A declaração de função dentro do objeto, funciona das duas formas
const obj = {
    falar: function () {
        console.log('Estou falando...');
    },
    falar2() {
        console.log('Estou falando de novo...');
    }
};
obj.falar();
obj.falar2();