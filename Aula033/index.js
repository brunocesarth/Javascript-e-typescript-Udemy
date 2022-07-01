//Atribuição via desestruturação - Objetos

const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 30,
    endereco: {
        rua: 'Av. Brasil',
        numero: 320
    }
};
 
console.log(pessoa.nome); //Aqui eu exibo o objeto pessoa e o atributo nome que está dentro do objeto
const nome1 = pessoa.nome; //Aqui eu atribuo o valor do atributo nome, do objeto pessoa, a uma variável chamada nome
console.log(nome1);

//Atribuição via desestruturação
const {nome = ''/* Valor padrão caso a chave não exista */, sobrenome} = pessoa; //Estou passando o objeto pessoa e pedindo que se extraia a chave nome, criando também a variável
console.log(nome, sobrenome);

const {nome: n = ''} = pessoa;
console.log(n);

const {
    endereco: { rua: r, //Aqui o valor da rua é atribuída a variável r
    numero}, 
    endereco } = pessoa; //Extraimos do endereço, o nome da rua e o número, e depois o endereço completo
console.log(r, numero, endereco);

const {idade, ...resto} = pessoa;//Aqui eu atribuo o valor do atributo idade a variável idade, e uso o ...rest para mostrar o restante do valor
console.log(idade, resto);