//Closures
/* Global */
function retornaFuncao() {
    const nome = 'Luiz';
    return function () {
        return nome;
    }; //Função anonima, essa função tem acesso a 3 escopos(corpo, mãe e global)
}

const funcao = retornaFuncao();
console.log(funcao);
console.dir(funcao);

//Closure é a habilidade da função, em acessar o seu escopo léxico

console.log('---===+++===---');

function retornaFuncao1(nome) {
    return function () {
        return nome;
    };
}

const funcao1 = retornaFuncao1('Luiz'); //Quando declaramos aqui a função, ela sempre será Luiz
const funcao2 = retornaFuncao1('João'); //Quando declaramos aqui a função, ela sempre será João

console.dir(funcao1);
console.dir(funcao2);

console.log(funcao1(), funcao2());