//Revisão do básico de arrays
//Índice        0           1          2
const nomes = ['Eduardo', 'Maria', 'Joana'];
//Funciona para Strings, Objetos, Funções, Números
nomes[2] = 'João';//Mudei o valor do segundo índice
console.log(nomes);
delete nomes[2];//Deletei o valor dentro do índice de número 2 do array, e ele está vazio, mas o índice segue existindo
console.log(nomes);

const nomes1 = new Array('Eduardo', 'Maria', 'Joana'); //Método construtor de array, funciona igual ao anterior

const novo = nomes; //Passando por referência, tudo que for feito no novo vai afetar o nomes e vice-versa

novo.pop(); //Aqui retiramos o último valor do array, tanto em nomes quanto em novos
console.log(`Variável nomes: ${nomes}`);
console.log(`Variável novos: ${novo}`);

console.log('---===+++===---');

const nomes2 = ['Eduardo', 'Maria', 'Joana'];
const novo1 = [...nomes2]; //Spread Operator - cria uma nova lista com os valores da lista passada, mas eles não estão no mesmo lugar na memória, então o que se faz em um, não afeta o outro
novo1.pop();
console.log(novo1);
console.log(nomes2);
console.log(nomes2.length);//length é um atributo e não um método
const removido = nomes2.pop();//.pop() - Removendo um elemento do final da lista, e atribuindo esse elemento removido a uma variável
console.log(nomes2, removido);
const removido1 = nomes2.shift();//.shift() - Removendo um elemento do começo da lista, e atribuindo a uma variável
console.log(removido1, nomes2, removido);

nomes2.push('João'); //.push() - Adiciona um elemento ao fim do array
nomes2.push('Wallace');
nomes2.unshift('Jonathan');//.unshift() - Adiciona um elemento ao inicio do array, alterando todos os índices 
nomes2.unshift('Gilberto');
console.log(nomes2);

console.log('---===+++===---');

//índice            0          1        2       3           4
const nomes3 = ['Eduardo', 'Maria', 'Joana', 'Wallace', 'Rosana'];
const novo2 = nomes3.slice(1, 3);  //.slice() - Eu estou fatiando o array, podendo ir para frente ou para trás usando menos (-)
console.log(novo2);

const nome = 'Luiz Ótavio Miranda';
const nomes4 = nome.split(' ');//.split() - Estou dividindo a string nome, pelos espaços nela, e atribuindo a uma lista, não precisa ser espaço, pode ser qualquer caractere
console.log(nomes4);

const nomes5 = ['Luiz', 'Ótavio', 'Miranda'];
const nome1 = nomes5.join(' ');//.join() - Estou transformando uma lista, em uma string e colocando o espaço como separador
console.log(nome1);