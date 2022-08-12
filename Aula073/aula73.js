//Métodos úteis para objetos

//Como copiar objetos para outros
const produto = { nome: 'Caneca', preco: 1.8 };
const outraCoisa = produto;

//Como produto e outraCoisa ocupam o mesmo lugar na memória, ao alterar um, eu altero os dois
outraCoisa.nome = 'Outro nome';
outraCoisa.preco = 2.5;
console.log(produto);
console.log(outraCoisa);

//Usando o spread operator(...), eu copio as coisas para a variável, ao invés de fazer ambas apontarem para o mesmo lugar na memória
const maisOutraCoisa = {
    ...produto,
    material: 'Porcelana'
};
maisOutraCoisa.nome = 'Mais outra coisa';
console.log(maisOutraCoisa);


//Ao invés de usar o spread operator para fazer a cópia, posso usar o Object.assign indicando o objeto vazio {} em primeiro lugar, em segundo, o que precisa ser copiado(produto por exemplo), e continuar adicionando coisas ao objeto com {}
const caneca = Object.assign({}, produto, { material: 'Porcelana' });
console.log(caneca);

//Caso seja necessário pegar apenas algumas das propriedades de um objeto pode se usar declaração direta
const caneca1 = { nome: produto.nome, preco: produto.preco };
console.log(caneca1);

console.log('---===+++===---');

const produto1 = { nome: 'Produto', preco: 1.8 };
Object.freeze(produto1); //Impede que o objeto seja alterado
produto1.nome = 'Outro nome';
const produto2 = { nome: produto1.nome, preco: produto1.preco };
console.log(Object.keys(produto1));

console.log('');
console.log('Object.getOwnPropertyDescriptor');
console.log('');

const produto3 = { nome: 'Produto', preco: 1.8 };
Object.defineProperty(produto3, 'nome', {
    writable: false,
    configurable: false,
    value: 'Qualquer outra coisa'
});
console.log(Object.getOwnPropertyDescriptor(produto3, 'nome'));
//Utilizo o getOwnPropertyDescriptor para verificar como estão as propriedades

produto3.nome = 'Outra coisa'; //Tentando alterar a propriedade nome do produto3, mas é impossível
console.log(produto3);
delete produto3.preco; //Aqui consigo deletar a propriedade preço do produto, porque as propriedades não foram alteradas
console.log(produto3);
console.log(Object.values(produto3)); //Trás só os valores
console.log(Object.entries(produto3)); //Trás os valores e as chaves

//Iterando sobre as entradas do objeto
for(let entry of Object.entries(produto)) {
    console.log(entry);
}

//Fazendo desestruturação do objeto
for(let [chave, valor] of Object.entries(produto)) {
    console.log(chave, valor);
}