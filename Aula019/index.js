/* 
Primitivos(valores imutáveis) - string, number, boolean, undefined, null(bigint, symbol)
*/
let nome = 'Luiz';
nome[0] = 'R';//Impossível de realizar a substituição, porque a string é imutável, substituível por outro valor, mas imutável
console.log(nome[0], nome);

let a = 'A';
let b = a; //Aqui eu copio o valor de a para b
console.log(a, b);

a = 'Outra coisa';
console.log(a, b); //Ambos são independentes

/*
    Referência (mutável) - array, object, function
*/

let c = [1, 2, 3];
let d = c; //Aqui eu estou fazendo o D apontar para o mesmo lugar de C na memória
console.log(c, d);

c.push(4);
console.log(c, d);//Nesse caso C e D apontam para o mesmo lugar na memória, por isso tem o mesmo valor

d.pop(); //Aqui pedimos para excluir um valor do array do D
console.log(c, d); //Aqui vemos que o valor não aparece tanto em C quanto em D exatamente porque ambos apontam para o mesmo lugar na memória