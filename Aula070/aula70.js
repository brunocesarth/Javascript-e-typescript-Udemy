// Revisando objetos
// Objetos literais são feitos pelas chaves{}
const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Ótavio',
};

console.log(pessoa.nome); //Notação de ponto
console.log(pessoa.sobrenome);
console.log(pessoa['nome']); //Notação de colchete
console.log(pessoa['sobrenome']);

// Na notação de colchetes eu posso colocar um valor dinâmico dentro
// Exemplo
const chave = 'nome';
console.log(pessoa[chave]);

console.log('---===+++===---');

const pessoa1 = new Object();
pessoa1.nome = 'Luiz';
pessoa1.sobrenome = 'Ótavio';
pessoa1.idade = 30;
console.log(pessoa1.nome);
console.log(pessoa1.sobrenome);

console.log(pessoa, pessoa1);

/* delete pessoa1.nome; */
console.log(pessoa1);

pessoa1.falarNome = function () {
    return (`${this.nome} está falando seu nome.`);
};
console.log(pessoa1.falarNome());

pessoa1.getDataNascimento = function () {
    const dataAtual = new Date();
    return dataAtual.getFullYear() - this.idade;
};
console.log(pessoa1.getDataNascimento());

for (let chave in pessoa1) {
    console.log(pessoa1[chave]);
}

console.log('---===+++===---');

//Factory functions / Constructor functions / Classes
//Factory functions
console.log('Factory function');
function criaPessoa(nome, sobrenome) {
    return {
        nome,
        sobrenome,
        nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`;
        }
    };
}

const p1 = criaPessoa('Luiz', 'Ótavio');
console.log(p1.nomeCompleto());

console.log('');
console.log('---===+++===---');
console.log('');

//Constructor function
console.log('Constructor function');
function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;

    Object.freeze(this);//Aqui bloqueia a alteração de qualquer coisa dentro do objeto
}

// A palavra new cria um objeto vazio, e atrela a palavra this dentro dessa função ao objeto, e retorna o this, implicitamente
const p2 = new Pessoa('Luiz', 'Miranda');
p2.nome = 'Outra coisa'; //Aqui alteramos o valor no endereço de memória da variável const, e não o valor da variável em si
delete  p2.nome;
console.log(p2);
const p3 = new Pessoa('Maria', 'Miranda');
Object.freeze(p3); //Posso travar o objeto para que ele não seja alterado
p3.nome = 'Teste';
console.log(p3);
