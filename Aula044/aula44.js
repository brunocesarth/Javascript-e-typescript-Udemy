//Tratando e lançando erros(try, catch, throw)

//Usar o try para tentar executar um código que tem potencial  de dar erro, e o catch para tratar o erro, aqui eu tento exibir uma variável que não existe, como ele dá erro, ela entra no catch e cria a variável.
try {
    console.log(naoExisto);
} catch (error) {
    const naoExisto = 'Oi';
    console.log(naoExisto);
}

console.log('---===+++===---'); //Divisão

//Aqui a gente chama a função para somar, e verifica se x e y, são números, se não forem uso o throw para lançar um erro
function soma(x, y) {
    if (typeof x !== 'number' || typeof y !== 'number') {
        throw new Error('x e y precisam ser números.'); //Aqui eu estou criando um novo erro
    }

    return x + y;
}


try {
    console.log(soma(1, 2));
    console.log(soma('1', 2));//Executando aqui ele trás o erro que está dentro do throw da função
} catch (error) {
    //console.log(error);
    console.log('Alguma coisa mais amigável pro usuário.');
}