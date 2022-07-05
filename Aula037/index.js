//Demonstração com string
console.log('Demonstração com string');
const nome = 'Luiz Ótavio';

//For clássico
for (let i = 0; i < nome.length; i++) {
    console.log(nome[i]);
}

console.log('######');//Criando uma divisão para melhor visualização
//For IN
for (let i in nome) {
    console.log(nome[i]);
}

console.log('######');
//For of - RETORNA O VALOR E NÃO O ÍNDICE, mais utilizado quando não se precisa do índice, somente do valor
for (let valor of nome) {
    console.log(valor);
}

console.log('Demonstração com array');
//Demonstração com array
const nomes = ['Luiz','Ótavio', 'Miranda'];

//For clássico
for (let i = 0; i < nomes.length; i++) {
    console.log(nomes[i]);
}

console.log('######');
//For IN
for (let i in nomes) {
    console.log(nomes[i]);
}

console.log('######');
//For of - RETORNA O VALOR E NÃO O ÍNDICE, mais utilizado quando não se precisa do índice, somente do valor
for (let valor of nomes) {
    console.log(valor);
}

console.log('######');
//forEach - Aqui eu consigo o valor, o índice e o array completo
nomes.forEach(function (valor, indice, array) {
    console.log(valor, indice, array);
});

console.log('Demonstração com objetos');
//Demonstração com objetos
const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Ótavio'
};

for(let chave in pessoa){
    console.log(chave);
}

//For of não funciona, porque objetos não são iteráveis
// for(let valor of pessoa) {
//     console.log(pessoa);
// }

//For clássico - Geralmente com iteráveis (arrays ou strings)
//For in - Retorna o índice ou chave (string, array ou objeto)
//For of - Retorna o valor em si (iteráveis, arrays ou strings)