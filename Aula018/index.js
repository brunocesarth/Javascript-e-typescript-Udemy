//Criando variável por variável da pessoa
const nome01 = 'Jackson';
const sobrenome01 = 'Teller';
const idade01 = 30;

const nome02 = 'Maria';
const sobrenome02 = 'Joaquina';
const idade02 = 25;

 //Criando o objeto pessoa
const pessoa1 = {
    nome: 'Jackson',
    sobrenome: 'Teller',
    idade: 30
};
// Colchetes[] é array | Chaves {} é um objeto

const pessoa2 = {
    nome: 'Maria',
    sobrenome: 'Joaquina',
    idade: 25
};

console.log(pessoa1.nome);
console.log(pessoa1.sobrenome);
console.log(pessoa1.idade);
console.log(pessoa2.nome);
console.log(pessoa2.sobrenome);
console.log(pessoa2.idade);

//Criando função para criação de pessoa | Essa função é chamada de factory, ela cria objetos
function criaPessoa(nome, sobrenome, idade){
    return {
        nome: nome,
        sobrenome: sobrenome,
        idade: idade
    };
}

const pessoa001 = criaPessoa('Jackson','Teller',30);//As informações são chamadas de argumentos, e são passadas para os parâmetros da função
const pessoa002 = criaPessoa('Maria', 'Joaquina', 25);
const pessoa003 = criaPessoa('João', 'Kleber', 21);
const pessoa004 = criaPessoa('Thomas', 'Shelby', 24);

console.log(pessoa001);
console.log(pessoa002);
console.log(pessoa003);
console.log(pessoa004 );
