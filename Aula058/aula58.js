// Função construtora -> objetos
// Função fabrica -> objetos
// Construtora -> Iniciar sempre com letra maiúscula. Ex: Pessoa(new)
// A convenção é criar a função com letra maiúscula 
function Pessoa(nome, sobrenome) {
    //Atributos ou métodos privados
    const ID = 123456;
    const metodoInterno = function() {

    };

    this.nome = nome;
    this.sobrenome = sobrenome;

    //método é uma função DENTRO do objeto
    this.metodo = () => {
        console.log(this.nome + ': Sou um método');
    };
}

// Criando objeto com a função construtura
// A variável p1 está recebendo uma nova pessoa com o new Pessoa e passando entre parênteses os atributos
// A palavra new cria um objeto vazio, e faz o this apontar para esse objeto vazio, e retorna implicitamente o objeto, para a variável, então não precisa de return
const p1 = new Pessoa('Luiz', 'Ótavio');
const p2 = new Pessoa('Maria', 'Oliveira');

console.log(p1.nome);
console.log(p2.nome);
p1.metodo();
p2.metodo();