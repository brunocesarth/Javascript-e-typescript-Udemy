/* 
Javascript é baseado em protótipos para passar propriedades e métodos de um objeto para outro.
Definição de protótipo

Protótipo é o termo usado para se referir ao que foi criado pela primeira vez, servindo de modelo ou molde para futuras produções.

Todos os objetos tem uma referência interna para um protótipo (__proto__) que vem da propriedade prototype da função construtora que foi usada para cria-lo. Quando tentamos acessar um membro de um objeto, primeiro o motor do JS vai tentar encontrar este membro do próprio objeto e depois a cadeia de protótipos é usada até o topo (null) até encontrar (ou não) tal membro
 */

function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.nomeCompleto = () => 'ORIGINAL: ' + this.nome + ' ' + this.sobrenome; //Como esse método é um do objeto ele é usado primeiro quando usamos o Pessoa.prototype.nomeCompleto, se esse cara não existisse, iria utilizar o outro.
}

Pessoa.prototype.estouAqui = 'Hahahaha';//__proto__ igual a prototype
Pessoa.prototype.nomeCompleto = function () {
    return this.nome + ' ' + this.sobrenome;
};1

const pessoa1 = new Pessoa('Luiz', 'O.'); // <-- Pessoa = Função construtura
const pessoa2 = new Pessoa('Maria', 'A.'); // <-- Pessoa = Função construtura
const data = new Date(); // <-- Date = Função construtura

//Todas as pessoas criadas com esse método pessoa, terão esse prototype

console.dir(pessoa1);
console.dir(data);

//Object.prototype é o pai de tudo no JS
//A cadeia é:  pessoa1 --> Pessoa.prototype --> Object.prototype