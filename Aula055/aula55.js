//Funções imediatas(IIFE - Immediately invoked function expression) - Funções auto-invocadas
function qualquerCoisa() {
    console.log(11123455);
}
qualquerCoisa();

//A função iife não toca o escopo global
(function () {
    console.log(123456);
})();//Ela é executada imediatamente, sem necessidade de ser chamada

(function () {
    const nome = 'Luiz';
    console.log(nome);
})();//Como a função só tem escopo local eu posso criar a variável com o mesmo nome da variável que está fora, sem problemas, não existe conflito

const nome = 'Qualquer coisa';
console.log(nome);

(function () {
    const sobrenome = 'Miranda';
    function criaNome(nome) {
        return nome + ' ' + sobrenome;
    }
    function falaNome() {
        console.log(criaNome('Luiz'));
    }
    falaNome();
})();

(function (idade, peso, altura) {
    const sobrenome = 'Miranda';
    function criaNome(nome) {
        return nome + ' ' + sobrenome;
    }
    function falaNome() {
        console.log(criaNome('Luiz'));
    }
    falaNome();
    console.log(idade, peso, altura);
})(30, 80, 1.80);//Aqui estou passando os argumentos para a função utilizar
