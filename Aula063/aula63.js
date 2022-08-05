//índice          0       1         2          3         4
const nomes = ['Maria', 'João', 'Eduardo', 'Gabriel', 'Julia'];

//nomes.splice(índice,  delete, elem1, elem2, elem3);
//pop
const removidos = nomes.splice(3, 2);
console.log(nomes, removidos);

console.log('---===+++===---');

//Índice negativo -5      -4       -3         -2        -1
const nomes2 = ['Maria', 'João', 'Eduardo', 'Gabriel', 'Julia'];
/* const removidos2 = nomes2.splice(-1, 1); */
const removidos2 = nomes2.splice(-2, Number.MAX_VALUE); //MAX_VALUE vai até o final do array, independente do tamanho(considerando o maior número que o JS aceita) 
console.log(nomes2, removidos2);

console.log('---===+++===---');

const nomes3 = ['Maria', 'João', 'Eduardo', 'Gabriel', 'Julia'];
const removidos3 = nomes3.splice(3, 0, 'Luiz');//Adicionando Luiz no índice 3
console.log(nomes3);
/* 
Com a inserção do Luiz dentro do array o índice dos itens muda
Índice antes       0        1        2          3         4
const nomes3 = ['Maria', 'João', 'Eduardo', 'Gabriel', 'Julia'];
Índice depois      0        1        2         3       4         5
               ['Maria', 'João', 'Eduardo', 'Luiz', Gabriel', 'Julia'];
 */

console.log('---===+++===---');

const nomes4 = ['Maria', 'João', 'Eduardo', 'Gabriel', 'Julia'];
const removidos4 = nomes4.splice(3, 1, 'Luiz');//Retirando o item do índice 3, atribuindo a variável e colocando no lugar dele o parâmetro 'Luiz'
console.log(nomes4, removidos4);


//Como simular os comandos com splice
//pop
//const removidos = nomes.splice(-1, 1);

//shift
//const removidos = nomes.splice(0, 1);

//push
//nomes.splice(nomes.length, 0, 'Luiz');

//unshift
//nomes.splice(0,0, 'Luiz', 'Ótavio');
