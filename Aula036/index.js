//For in -> lê os indices ou chaves do objeto

const frutas = ['Pera', 'Maça', 'Uva'];

for (let i = 0; i < frutas.length; i++) {
    console.log(frutas[i]);
}

//Aqui ele está lendo os indices do array
for (let index in frutas) {
    console.log(frutas[index]);
}

const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Ótavio',
    idade: 30
};

console.log(pessoa.nome);
console.log(pessoa['nome']);

for (let chave in pessoa) {
    console.log(chave, pessoa[chave]);
}