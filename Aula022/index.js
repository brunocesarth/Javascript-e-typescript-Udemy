/* 
**  Operadores Lógicos
*   && -> AND -> E - Todas as expressões precisam ser verdadeiras para retornar TRUE
*   || -> OR -> OU - Qualquer uma das expressões pode ser verdadeira
*   ! -> NOT -> NÃO
*/
const expressaoAnd = true && true && true && true; //Condicional "E" retornando verdadeira porque todas as condições retornam true
console.log(expressaoAnd);
const expressaoAnd1 = true && true && true && false; //Condicional "E" retornando falsa porque não são todas as condições que retornam true
console.log(expressaoAnd1);

const expressaoOr = false || true || false || false; //Condicional "OU" retornando true, porque uma das expressões é true
console.log(expressaoOr);
const expressaoOr1 = false || false; //Condicional "OU" retornado false, porque ambas as expressões são false
console.log(expressaoOr1);

//EXEMPLO
const usuario = 'Jax'; //Form no qual o usuário digitou
const senha = '123456'; //Form no qual o usuário digitou

const vaiLogar = usuario === 'Jax' && senha === '123456'; //Comparação teórica com uma base de dados
console.log(vaiLogar);

console.log(!true); //Aqui estou negando o valor, e o true vira false