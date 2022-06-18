/* 
**  && -> false && true - false "o valor mesmo"
*   || -> true || false - vai retornar "o valor mesmo"
*   
*   FALSY - Valores avaliados em false
*   false
*   0
*   '' "" ``
*   null / undefined
*   NaN
*   Qualquer coisa diferente disso é avaliado em true
*/
console.log('Luiz' && 'Maria'); //Como é verdadeiro retorna o último valor lido, aqui retorna 'Maria'
console.log('Luiz' && '' && 'Maria'); //'' é avaliado em falso, então para nesse valor e apresenta um vazio

function falaOi(){
    return 'Oi';
}

let vaiExecutar = false;

vaiExecutar && falaOi(); //Aqui já chega a variável e retorna o valor
console.log(vaiExecutar && falaOi());

vaiExecutar = 'Joãozinho'; //O javascript entende esse valor como verdadeiro então ele executa a função falaOi()
console.log(vaiExecutar && falaOi());

console.log(0 || false || null || 'Jax Teller' || true); //Retorna o primeiro valor verdadeiro encontrado na expressão, aqui foi "Jax Teller"

//Exemplo 
//Verificando que o valor é false
let corUsuario = null;
let corPadrao = corUsuario || 'Preto';
console.log(corPadrao);

//Verificando que o valor é true
corUsuario = 'Vermelho';
corPadrao = corUsuario || 'Preto';
console.log(corPadrao);

//Aqui retorna um valor verdadeiro, porém existe uma pegadinha, o valor que aparece é 'false', que é uma string, que é verdadeira
const a = 0;
const b = null;
const c = 'false';
const d = false;
const e = NaN;
console.log(a || b || c || d || e);