//Tratando e lançando erro(try, catch, finally)

try {
    console.log('Abri um arquivo');
    console.log('Manipulei o arquivo e gerou erro');
    console.log('Fechei o arquivo');
    //É executada quando não há erros
} catch (e) {
    console.log('Tratando o erro');
    //É executada quando há erros
} finally {
    console.log('FINALLY: Eu sempre sou executado');
    //É executado SEMPRE, mas pode ser omitido caso não seja necessário caso um código seja executado sempre
}

console.log('---===+++===---'); //Divisão

//SIMULANDO O ERRO, variável a não existe
try {
    console.log(a);
    console.log('Abri um arquivo');
    console.log('Manipulei o arquivo e gerou erro');
    console.log('Fechei o arquivo');
    //É executada quando não há erros
} catch (e) {
    console.log('Tratando o erro');
    //É executada quando há erros
} finally {
    console.log('FINALLY: Eu sempre sou executado');
    //É executado SEMPRE, mas pode ser omitido caso não seja necessário caso um código seja executado sempre
}

console.log('---===+++===---'); //Divisão

//Demonstração de try, dentro de try
try {
    console.log('Abri um arquivo.');
    console.log('Manipulei o arquivo e gerou erro.');
    console.log('Fechei o arquivo.');
    //É executada quando não há erros
    try {
        console.log(b);
    } catch {
        console.log('Deu erro.');
    } finally {
        console.log('Também sou finally.')
    }
} catch (e) {
    console.log('Tratando o erro.');
    //É executada quando há erros
} finally {
    console.log('FINALLY: Eu sempre sou executado.');
    //É executado SEMPRE, mas pode ser omitido caso não seja necessário caso um código seja executado sempre
}

console.log('---===+++===---'); //Divisão

function retornaHora(data) {
    if (data && !(data instanceof Date)) {
        throw new TypeError('Esperando instância de Date.');
    }

    if (!data) {
        data = new Date();
    }
    return data.toLocaleTimeString('pt-BR', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    });
}
//retorna hora atual
const hora = retornaHora();
console.log(hora);

//retorna a hora passada
const data1 = new Date('01-01-1970 12:58:12');
const hora1 = retornaHora(data1);
console.log(hora1);

//retorna erro, porque não foi passada uma hora
//const hora2 = retornaHora(11);
//console.log(hora2);

//Aqui tratamos o erro que dá no caso acima
try {
    const hora2 = retornaHora(11);
    console.log(hora2);
} catch (e) {
    //Tratar erro
    console.log(e);
} finally {
    console.log('Tenha um bom dia.')
}