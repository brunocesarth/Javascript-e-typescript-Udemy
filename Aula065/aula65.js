//Filter - Filtrando o array
//Filter, map, reduce - são as funções mais importantes para array em JS
//Filter -> Sempre vai retorna um array, com a mesma quantidade de elementos ou menos

//Retorne os números maiores que 10
//Como eu fiz antes do filter
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
let numerosMaioresDez = [];

for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] > 10) {
        numerosMaioresDez.push(numeros[i]);
    }
}

console.log(numerosMaioresDez);

console.log('---===+++===---');

//Usando o filter
function callbackFilter(valor) {
    return valor > 10; //Retorna verdadeiro ou falso automaticamente
}

const numerosFiltrados = numeros.filter(callbackFilter);
console.log(numerosFiltrados);

//Usando arrow function 
const numerosFiltrados2 = numeros.filter(valor => valor > 10);
console.log(numerosFiltrados2);

console.log('---===+++===---');

// Retorne as pessoas que tem o nome com 5 letras ou mais
// Retorne as pessoas com mais de 50 anos
// Retorne as pessoas cujo nome termina com a
const pessoas = [
    { nome: 'Luiz', idade: 62 },
    { nome: 'Maria', idade: 23 },
    { nome: 'Eduardo', idade: 55 },
    { nome: 'Letícia', idade: 19 },
    { nome: 'Rosana', idade: 32 },
    { nome: 'Wallace', idade: 47 },
];

const pessoasComNomeGrande = pessoas.filter(obj => obj.nome.length >= 5);
console.log(pessoasComNomeGrande);
const pessoasComMaisDeCinquenta = pessoas.filter(obj => obj.idade > 50);
console.log(pessoasComMaisDeCinquenta);
const nomeTerminaComA = pessoas.filter(obj => obj.nome.toLowerCase().endsWith('a'));
console.log(nomeTerminaComA);