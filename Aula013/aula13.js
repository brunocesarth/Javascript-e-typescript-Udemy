let umaString = "Um \"texto\"";
console.log(umaString);

let outraString = "Um \\texto";
console.log(outraString);

//                     01234567
let maisOutraString = "Um texto";
console.log(maisOutraString[4]); //Resultado: e
console.log(maisOutraString[8]); //Resultado: undefined
console.log(maisOutraString.charAt(6)); //Resultado: t
console.log(maisOutraString.charAt(8)); //Resultado vazio
console.log(maisOutraString.concat(' em um lindo dia')); //Saída: "Um texto em um", concat = concatena o valor da varíavel com o parametro passado
console.log(maisOutraString + ' em um lindo dia'); // Concatenação com símbolo de mais
console.log(`${maisOutraString} em um lindo dia`); //TEMPLATE STRINGS
console.log(maisOutraString.indexOf('texto')); //Retorna o valor de onde se inicia a string que está sendo passada como parametro, no caso 3
console.log(maisOutraString.indexOf('Um', 3)); //Na passagem de parametro o número 3 está indicando que a busca da palavra "Um", deve ser iniciada a partir do indice 3, no caso não existe, então é retornado o valor -1
console.log(maisOutraString.indexOf('o', 3)); //Dessa vez passando a letra "o" como parametro para ser buscada a partir do indice 3 e trazendo e retornando o valor 7
console.log(maisOutraString.lastIndexOf('o', 3)); // Aqui começa de trás para frente, com o parametro 3 passado ele não encontra a letra "o" que é a última e retorna -1
console.log(maisOutraString.lastIndexOf('o')); // Aqui ele encontra a letra por não ter sido passado parametro de casa a começar