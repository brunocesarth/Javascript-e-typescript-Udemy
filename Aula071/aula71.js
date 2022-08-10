//Object.defineProperty() e Object.defineProperties()
//Essa funções são relacionadas com as chaves do objeto
//defineProperty -> define uma propriedade
//defineProperties -> define mais propriedades
console.log('Exemplo com defineProperty');
console.log('');
function Produto(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;

    Object.defineProperty(this, 'estoque', {
        enumerable: true,
        value: estoque,
        writable: false,
        configurable: true
    });
}

//writable -> fala se o valor pode ou não ser alterado (true ou false)
//value -> indica o valor recebido
//enumerable -> indica se a informação/chave pode ou não ser exibida (true ou false)
//configurable -> pode apagar ou reconfigurar a chave (true ou false)

const p1 = new Produto('Camiseta', 20, 3);
console.log(p1);//nome é uma variável pública
console.log(Object.keys(p1)); //É um array com as chaves que são enumeradas

for (let chave in p1) {
    console.log(chave);
}

console.log('');
console.log('---===+++===---');
console.log('Exemplo com defineProperties');
console.log('');
function Product(nome, preco, estoque) {
    Object.defineProperty(this, 'estoque', {
        enumerable: true,
        value: estoque,
        writable: false,
        configurable: true
    });

    Object.defineProperties(this, {
        nome: {
            enumerable: true,
            value: nome,
            writable: false,
            configurable: true
        },
        preco: {
            enumerable: true,
            value: preco,
            writable: false,
            configurable: true
        },
    });
}

const p2 = new Product('Camiseta', 20, 3);
console.log(p2);

for(let chave in p2) {
    console.log(chave);
}