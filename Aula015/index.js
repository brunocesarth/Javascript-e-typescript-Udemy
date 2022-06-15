let num1 = 9.54578;
let num2 = Math.floor(num1); //Arredonda o valor de num1 para baixo
console.log(num2);
let num3 = Math.ceil(num1); //Arredonda o valor de num1 para cima
console.log(num3);
let num4 = Math.round(num1); //Arredonda o valor para o mais próximo cima ou baixo
console.log(num4);
console.log(Math.max(1,2,3,4,5,-10,-50,1500,9,8,7,6)); //Trás o maior valor da sequência
console.log(Math.min(1,2,3,4,5,-10,-50,1500,9,8,7,6)); //Trás o menor valor da sequência

const aleatorio = Math.round(Math.random() * (10 - 5) + 5 ); //gera um número aleatório entre 10 e 5, e o math.round tira as casas decimais
console.log(aleatorio);
console.log(Math.PI);
console.log(Math.pow(2, 10)); //Função para exponenciação
console.log(2 ** 10);

let num5 = 9;
console.log(num5 ** (1/2)); //1º Método de se obter a raiz quadrada
console.log(num5 ** 0.5); //2º Método de se obter a raiz quadrada
console.log(Math.sqrt(num5)); //3º Método de se obter a raiz quadrada

console.log(100 / 0); //Gera um Infinity e trás um true