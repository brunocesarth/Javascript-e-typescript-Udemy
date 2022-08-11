// Getter e Setters
// defineProperty -> getter e setters
// Getters e setters são maneiras de se proteger as propriedades
//Constructor Function
function Produto(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;

    let estoquePrivado = estoque;
    Object.defineProperty(this, 'estoque', {
        enumerable: true,
        configurable: true,
        get: function () {
            return estoquePrivado;
        },
        set: function (valor) {
            if (typeof valor !== 'number') {
                throw new TypeError('Mensagem');
            }
            estoquePrivado = valor;
        }
    });
}
const p1 = new Produto('Camiseta', 20, 3);
/* console.log(p1); */
p1.estoque = 500;
console.log(p1.estoque);
/* const p2 = new Produto('Camiseta', 30, 3);
p2.estoque = 'teste';
console.log(p2.estoque); */


console.log('');
console.log('');

//Factory Function
function criaProduto(nome) {
    return {
        get nome() {
            return nome;
        },
        set nome(valor) {
            valor = valor.replace('coisa.', '');
            nome = valor;
        }
    }
}

const p3 = criaProduto('Camiseta');
p3.nome = 'Qualquer coisa.';
console.log(p3.nome);