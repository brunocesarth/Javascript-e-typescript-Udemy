//Reduce - Reduzindo o array

//Some todos os números(reduce)
//Retorne um array com os pares(filter)
//Retorne um array com o dobro dos valores(Map)
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const total = numeros.reduce(function (acumulador, valor) {
    acumulador += valor;
    return acumulador;
}, 0);//valor inicial do acumulador, se não for enviado o valor assumido é o do primeiro item do array
console.log(total);

console.log('---===+++===---');

//Retorne a pessoa mais velha
const pessoas = [
    { nome: 'Luiz', idade: 62 },
    { nome: 'Maria', idade: 23 },
    { nome: 'Eduardo', idade: 55 },
    { nome: 'Letícia', idade: 10 },
    { nome: 'Rosana', idade: 64 },
    { nome: 'Wallace', idade: 63 },
];
const maisVelha = pessoas.reduce(function (acumulador, valor) {
    if (acumulador.idade > valor.idade) return acumulador;
    return valor;
});
console.log(maisVelha);