let num1 = 1; //number
let num2 = 2.5; //number

console.log(num1.toString() + num2.toString()); //Transformo temporariamente o number em string com toString() e faz a concatenação e não a soma
//num1 = num1.toString(); altera permanentemente o tipo da variável para string

let num3 = 1500;
console.log(num3.toString(2)); //Trás a representação binária do valor da variável(1500)

let num4 = 10.5789551255547;
console.log(num4.toFixed(2)); //toFixed, fixa a quantidade de casas decimais

let num5 = 10;
console.log(Number.isInteger(num5)); //trás a informação se o número é um inteiro, com verdadeiro ou falso
let num6 = 10.25;
console.log(Number.isInteger(num6)); //aqui retorna falso

let temp = num6 * 'Ola';
console.log(temp); //Retorna um NaN porque o resultado não é um número
console.log(Number.isNaN(temp)); //verifica se a conta é um NaN e retorna verdadeiro ou falso, aqui retorna true porque realmente não é um número

let num7 = 0.7;
let num8 = 0.1;
//console.log(num7+num8); A conta da 0.7999999999999999

num7 += num8;//0.8
num7 += num8;//0.9
num7 += num8;//1.0, deveria dar 1 mas dá 0.9999999999999999

console.log(num7.toFixed(2));//Não resolve o problema de verdade, ele só muda a apresentação para virar um número inteiro é necessário usar o parseFloat
console.log(Number.isInteger(num7));//Mostra que o resultado com toFixed continua não sendo inteiro

num7 = parseFloat(num7.toFixed(2));//transforma o número em um inteiro
console.log(Number.isInteger(num7));//mostra que agora é um número inteiro, retornando true

let num9 = 0.7;
let num10 = 0.1;
num9 = ((num9 * 100) + (num10 * 100)) / 100; // 0.8 | multiplica por 100 os números, soma e depois divide por 100 novamente para trazer o resultado correto
num9 = ((num9 * 100) + (num10 * 100)) / 100; // 0.9 
num9 = ((num9 * 100) + (num10 * 100)) / 100; // 1.0
console.log(num9);