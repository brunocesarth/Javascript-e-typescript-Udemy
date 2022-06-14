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
console.log(maisOutraString.match(/[a-z]/g)); // Expressão regular, e trás todas as letras minusculas. 
console.log(maisOutraString.search(/[a-z]/)); //Retorna o indice onde foi pedido para encontrar uma letra minuscula, no caso ele retorna 1, poderia indicar também uma letra especifica a ser encontrada na expressão. Ex: /[x]/, retornaria 5
console.log(maisOutraString.replace('Um', 'Outro')); //Aqui eu substítuo a palavra encontrada 'Um' no texto, pela palavra 'Outro', indicada na sequência
console.log(maisOutraString.replace(/Um/, 'Outro')); //Funciona igual ao acima

let eLaVaiOutraString = "O rato roeu a roupa do rei de roma.";
console.log(eLaVaiOutraString.replace(/r/g, '#')); // Nesse caso o # substituí o r em todas as ocorrências devido o parametro g
console.log(eLaVaiOutraString.length); //length é um atributo que trás o "TAMANHO/EXTENSÃO" de algo
console.log(eLaVaiOutraString.slice(2,6)); //Trás a seleção passada por parametro, no caso a partir do indice 2 ao 6, a palavra acaba no 5, mas precisa passar o número subsequente, posso usar negativo também, que ele pega o tamanho da string, menos a quantidade passada
console.log(eLaVaiOutraString.substring(eLaVaiOutraString.length -5, eLaVaiOutraString.length -1)); //Mesma coisa do slice, só que mais "verboso"
console.log(eLaVaiOutraString.split(' ')); //split divide pelo parametro passado, no caso foi o espaço
console.log(eLaVaiOutraString.split(' ', 2)); //split divide pelo parametro passado, no caso foi o espaço, o número indica a quantidade de vezes para ser feito
console.log(eLaVaiOutraString.toUpperCase()); //Coloca toda a string em maiusculo
console.log(eLaVaiOutraString.toLowerCase()); //Coloca toda a string em minusculo