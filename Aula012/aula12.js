//Minha solução
let varA = 'A'; // PASSE A TER O VALOR DE B
let varB = 'B'; // PASSE A TER O VALOR DE C
let varC = 'C'; // PASSE A TER O VALOR DE A

console.log(varA, varB, varC);

let varAux;

varAux = varA;
varA = varB;
varB = varC;
varC = varAux;

console.log(varA, varB, varC);

/*  Solução do instrutor
**  [varA, varB, varC] = [varB, varC, varA];
*   console.log(varA, varB, varC);
*/