//Map - Mapeando o array

//Dobre os números
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

//Map usa o valor do array original para criar um novo array, sem alterar o original

const numerosEmDobro = numeros.map(valor => valor * 2);
console.log(numerosEmDobro);

console.log('---===+++===---');

//Para cada elemento
//Retorne apenas uma string com o nome da pessoa
//Remova apenas a chave "nome" do objeto
//Adicione uma chave id em cada objeto(id)
const pessoas = [
    { nome: 'Luiz', idade: 62 },
    { nome: 'Maria', idade: 23 },
    { nome: 'Eduardo', idade: 55 },
    { nome: 'Letícia', idade: 19 },
    { nome: 'Rosana', idade: 32 },
    { nome: 'Wallace', idade: 47 },
];

const nomes = pessoas.map(obj => obj.nome);
const idades = pessoas.map(obj => ({ idade: obj.idade }));
const comIds = pessoas.map(function (obj, indice) {
    const newObj = { ...obj };
    newObj.id = indice;
    return newObj;
}); //Para que o objeto original não seja alterado é necessário criar um novo objeto, se não for criado um novo, as alterações também serão realizadas no original
//É possível alterar o objeto dentro do array, mas não o array
console.log(nomes);
console.log(idades);
console.log(comIds);
console.log(pessoas);