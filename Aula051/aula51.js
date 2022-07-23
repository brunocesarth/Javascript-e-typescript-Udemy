//Retorno da função
//Return - retorna um valor
//Termina a função

//Função retornando valor
function soma(a, b) {
    return a + b;
}
console.log(soma(5, 2));

//Função não retornando valor, somente executando o comando interno
function soma2(a, b) {
    console.log(a + b);
}

soma2(5, 2);

function criaPessoa(nome, sobrenome) {
    return { nome: nome, sobrenome: sobrenome };
}

const p1 = criaPessoa('Luiz', 'Ótavio');
const p2 = {
    nome: 'João',
    sobrenome: 'Oliveira'
}; //Esse objeto tem os mesmos atributos que a função, só que a função pode ser sempre chamada ao invés de criar um objeto para cada pessoa

console.log(p1);
console.log(p2);
console.log(typeof p1); //Mostra que é um objeto, aqui criado por função
console.log(typeof p2); //Mostra que é um objeto, aqui criado direto

function falaFrase(comeco) {
    function falaResto(resto) {
        return comeco + ' ' + resto;
    }

    return falaResto;
}

const fala = falaFrase('Olá');
const resto = fala('mundo!');//o fala, chama a função falaFrase(), e a fala recebeu o falaResto
console.log(resto);

function duplica(n) {
    return n * 2;
}

function triplica(n) {
    return n * 3;
}

function quadriplica(n) {
    return n * 4;
}

console.log(duplica(2));
console.log(triplica(2));
console.log(quadriplica(2));

function criaMultiplicador(multiplicador) {
    //Multiplicador
    return function (n) {
        return n * multiplicador;
    }
}

const duplica1 = criaMultiplicador(2);//Função closure
const triplica1 = criaMultiplicador(3);
const quadriplica1 = criaMultiplicador(4);

console.log(duplica1(2));//Ela multiplica o parâmetro passado dentro dos parenteses, pelo multiplicador declarado na criação da variável 
console.log(triplica1(2));
console.log(quadriplica1(2));