/* 
**  Operadores de comparação
*   > Maior que
*   >= Maior que OU igual a
*   < Menor que
*   <= Menor que OU igual a
*   == Igualdade (valor) : NÃO USAR
*   === Igualdade estrita (valor e tipo)
*   != Diferente (valor) : NÃO USAR 
*   !== Diferente estrito (valor e tipo)
*/

console.log(10 > 5); //Sempre retorna um valor booleano

const comp = 10 > 5; //Posso colocar também em uma variável
console.log(comp); //Aqui mostra que o valor que a variável esta guardando é um booleano(true ou false)

const comp1 = 10 > 5; // É verdadeiro somente se o primeiro for maior que o segundo
const comp2 = 10 >= 5; // É verdadeiro se o primeiro for maior OU igual ao segundo
const comp3 = 10 < 5; // É verdadeiro se o primeiro for menor que o segundo
const comp4 = 10 <= 5; // É verdadeiro se o primeiro for menor OU igual ao segundo
const comp5 = 10 == '10'; // É verdadeiro se o primeiro e o segundo forem VALORES iguais mas podem ser de tipos diferentes, o que não é correto, porque o javascript converte para valor a string: NÃO USAR
const comp6 = 10 === 10; // É verdadeiro se o primeiro e o segundo forem VALORES E TIPOS iguais
const comp7 = 10 != 10; // É verdadeiro se os números forem VALORES diferentes, mas também podem ser de tipos diferentes, o que também não é correto
const comp8 = 10 !== 10; // É verdadeiro se os números forem VALORES diferentes, mas são do mesmo tipo(NUMBER)

console.log(comp1, comp2, comp3, comp4, comp5, comp6, comp7, comp8);