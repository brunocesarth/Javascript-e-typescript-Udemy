//Funções geradoras
function* geradora1() {
    //Código qualquer ...
    yield 'Valor1';
    //Código qualquer ...
    yield 'Valor2';
    //Código qualquer ...
    yield 'Valor3';
}

const g1 = geradora1();
console.log(g1.next()); //Para acessar o atributo de uma função geradora eu preciso usar o método next()
console.log(g1.next().value); //Me entrega o valor do primeiro yield - Aqui ele chama o segundo valor
console.log(g1.next().value); //Aqui ele chama o terceiro valor
console.log(g1.next()); //Aqui retorna undefined, porque já não existem mais valores na função geradora

const g2 = geradora1();
for (let valor of g2) {
    console.log(valor);
} //O for itera até o termino da função

console.log('---===+++===---');

function* geradora2() {
    let i = 0;
    while (true) {
        yield i;
        i++;
    }
}

const g3 = geradora2();
console.log(g3.next().value);
console.log(g3.next().value);
console.log(g3.next().value);
console.log(g3.next().value);
console.log(g3.next().value);
console.log(g3.next().value);
console.log(g3.next().value);
console.log(g3.next().value);

console.log('---===+++===---');

function* geradora3() {
    yield 0;
    yield 1;
    yield 2;
}

function* geradora4() {
    yield* geradora3(); //aqui eu utilizo o que foi feito na função geradora anteriormente e continua na função atual
    yield 3;
    yield 4;
    yield 5;
}

const g4 = geradora4();
for(let valor of g4) {
    console.log(valor);
}

console.log('---===+++===---');

function* geradora5() {
    yield function () {
        console.log('Vim do y1');
    };
    yield function() {
        console.log('Vim do y2');
    };
}
const g5 = geradora5();
const func1 = g5.next().value;
const func2 = g5.next().value;

console.log("Chamando o yield 1 de dentro da função");
func1();
console.log("Chamando o yield 2 de dentro da função");
func2();

//Usar o return no meio da função, ela vai terminar e não continuar os yields abaixo