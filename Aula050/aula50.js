//Parâmetros da função
//A função definida com a palavra function tem uma variável especial, chamada arguments, que sustenta todos os argumentos enviados
//NÃO FUNCIONA EM ARROW FUNCTION

function funcao() {
    console.log('Oie');
    console.log(arguments);//O arguments pode trazer todos os valores passados para a função, mesmo que nenhum parâmetro tenha sido declarado dentro dos parenteses
    console.log(arguments[0]);//Posso trazer o índice dos parâmetros passados 
}
funcao('Valor', 1, 2, 3, 4, 5, 6);//Dentro dos parenteses da chamada da função eu posso passar parâmetros para a função, esse valor é capturado dentro dos parenteses da função, podem ser passados diversos valores, separados por virgula


//Aqui fazemos a soma dos parâmetros passados dentro da chamada da função, usando somente o arguments 
function funcao1() {
    let total = 0;
    for (argumento of arguments) {
        total += argumento;
    }
    console.log(total);
}
funcao1(1, 2, 3, 4, 5, 6, 7);

function funcao2(a, b, c, d, e, f) {
    console.log(a, b, c, d, e, f);
}
funcao2(1, 2, 3, 4, 5, 6, 7);
funcao2(1, 2, 3);//O javascript criou as variáveis (d, e, f) que não receberam nenhum valor, e atribui o valor padrão UNDEFINED

/* Como é feito atualmente, para atribuir um valor, caso não seja recebido pela chamada da função, o valor é atribuído na declaração da variável dentro do parenteses */

/* b = b || 0; Solução antiga de como fazer o b assumir algum número caso o valor não fosse passado, b é igual a b OU b é igual a 0, então se b não recebesse valor, assumiria o valor 0 */
function funcao3(a, b = 2, c = 4) {
    console.log(a + b + c);
}
funcao3(2); //Passando somente o valor de a
funcao3(2, 10); //Passando o valor de a e b
funcao3(2, 10, 20); //Passando o valor de a, b e c
funcao3(2, undefined, 20); //Passando o valor de a e c, e enviando undefined para que ele assuma o valor de b declarado na função, e só funciona assim
funcao3(2, null, 20);//Aqui ele assume que o valor de null é 0

//Atribuição via desestruturação dentro da função
function funcao4({ nome, sobrenome, idade }) {
    console.log(nome, sobrenome, idade);
}
let obj = { nome: 'Luiz', sobrenome: 'Otávio', idade: 20 };
funcao4(obj);

//Atribuição via desestruturação de array dentro da função
function funcao5([valor1, valor2, valor3]) {
    console.log(valor1, valor2, valor3);
}
funcao5(['Luiz Otávio', 'Miranda', 30]);

console.log('---===+++===---');

function conta(operador, acumulador, ...numeros) {
    for (let numero of numeros) {
        if (operador === '+') acumulador += numero;
        if (operador === '-') acumulador -= numero;
        if (operador === '/') acumulador /= numero;
        if (operador === '*') acumulador *= numero;
    }
    console.log(acumulador);
}
conta('+', 0, 20, 30, 40, 50);
conta('-', 0, 20, 30, 40, 50);
conta('/', 1, 20, 30, 40, 50);
conta('*', 1, 20, 30, 40, 50);
