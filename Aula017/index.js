 //Função recebendo o parâmetro apenas e exibindo algo
 function saudacao (nome)/* Variável recebendo o parâmetro sendo passado na chamada da função */
{
    console.log(`Bom dia ${nome}!`);
}
saudacao('Bruno');//O parâmetro passado entre parenteses está indo para a variável entre parenteses na função(nome)

//Função retornando um valor e sendo armazenado em uma variável
function saudacao1(nome1){
    return `Bom dia ${nome1}!`;//Aqui eu estou retornando um valor da função
}
const variavel = saudacao1('Bruno'); //a variável está recebendo o valor que foi retornado da função
console.log(variavel);

//Função retornando o valor de uma variável
function soma(x, y) //X e Y representam as variáveis que irão receber valores externos dentro da função
{
    const resultado = x + y;
    return resultado;//Não executa nada abaixo da função
}
console.log(soma(2, 2));
console.log(soma(3, 1));
console.log(soma(5, 10));
const resultado = soma();//chamando a função sem o envio dos parâmetros, retorna um NaN, nesse caso
console.log(resultado);

const raizQ = function(n) //atribuindo diretamente o valor de uma função a uma variável
{
    return n ** 0.5;
}; // Nesse caso é necessário terminar a função com um ponto e vírgula (;)

console.log(raizQ(9));
console.log(raizQ(16));
console.log(raizQ(25));

//arrow function
const raiz = n => n ** 0.5; //Pode ser escrito dessa forma quando é uma função simples de apenas uma linha
console.log(raiz(9));
console.log(raiz(16));
console.log(raiz(25));