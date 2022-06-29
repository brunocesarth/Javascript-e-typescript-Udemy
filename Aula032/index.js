let a = 'A';//B
let b = 'B';//C
let c = 'C';//A

//Atribuição via desestruturação
const letras = [b, c, a]; //Aqui eu coloco as variáveis dentro de um array em uma ordem diferente
[a, b, c] = letras; //Aqui eu faço essa nova ordem ser atribuída as variáveis

console.log(a, b, c);

//ÍNDICE         0,     1,   2,    3,    4,    5,    6,    7,    8
const numeros = [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000];

//const primeiroNumero = numeros[0];
//console.log(primeiroNumero);

const [um, dois, tres, ...resto] = numeros;//Pego os 2 primeiros elementos do array e atribuo as duas variáveis disponíveis criadas
//... operador rest, ... operador spread
console.log(um, dois, tres);
console.log(resto);

const [um1,,tres1,,cinco1,,sete1] = numeros;
console.log(um1, tres1, cinco1);

//índice              0          1          2
//índice           0  1  2    0  1  2    0  1  2
const numeros1 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

console.log(numeros1[1][2]);//Para acessar o índice 2 na lista 2

//Atribuição via desestruturação de mais de 1 array
const [,[,,seis]] =  numeros1;
console.log(seis);

//Atribuição via desestruturação por array
const [lista1, lista2, lista3] = numeros1;
console.log(lista3[2]);