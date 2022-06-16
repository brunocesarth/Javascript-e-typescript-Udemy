/* 
**  Aritméticos 
*   + ADIÇÃO / CONCATENAÇÃO
*   - SUBTRAÇÃO
*   / DIVISÃO
*   * MULTIPLICAÇÃO
*   ** POTENCIAÇÃO
*   % RESTO DA DIVISÃO
*   ORDEM DE PRECEDÊNCIA () ** * / % + -
*   ++ INCREMENTO
*   -- DECREMENTO
*/
const num1 = 5;
const num2 = 2;
const num3 = 10
console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 * num2);
console.log(num1 / num2);
console.log(num1 ** num2);
console.log(num1 % num2);
console.log((num1 + num2) * num3);

//QUANDO FOR NECESSÁRIO USAR CONTADOR, USAR VARIÁVEL LET
let contador = 1;
contador++; //Executa a ação e depois incrementa
++contador; //Primeiro faz a conta e depois retorna o valor

console.log(contador);


let contador1 = 1;
console.log(contador1++);//Apresenta o valor 1 porque primeiro mostra o contador depois fez a soma
console.log(contador1);//Resultado da conta anterior já com o valor atribuído
console.log(++contador1);//Apresenta o valor 3 porque fez a conta primeiro e depois apresentou o resultado

//Operador de atribuição adição
let contador2 = 0;
contador2 += 2; //contador2 = contador2 + 2
contador2 += 2;
contador2 += 2;
console.log(contador2);

//Operador de atribuição multiplicação
let contador3 = 2;
contador3 *= 2; //contador3 = contador3 * 2
contador3 *= 2;
contador3 *= 2;
console.log(contador3);

//Operador de atribuição potenciação
let contador4 = 2;
contador4 **= 10;
console.log(contador4);

//NaN - Not a Number - existe um erro na conta
const num4= 10;
const num5 = 'Bruno';
console.log(num4 * num5);

//Em alguns casos JS soluciona a multiplicação de uma string em número, com um número
const num6 = 10;
const num7 = '5';
console.log(num6 * num7);
console.log(typeof num7);

const num8 = 10;
const num9 = parseInt('5'); //parseInt ESTÁ CONVERTENDO A STRING PARA NUMBER INTEIRO
console.log(num8 + num9);
console.log(typeof num9);

const num10 = 10;
const num11 = parseFloat('5.2'); //parseFloat ESTÁ CONVERTENDO A STRING PARA NUMBER COM CASAS DECIMAIS
console.log(num10 + num11);
console.log(typeof num11);

const num12 = 10;
const num13 = Number('5.2'); //NUMBER transforma qualquer situação em número, seja inteiro ou float
console.log(num12 + num13);
console.log(typeof num13);