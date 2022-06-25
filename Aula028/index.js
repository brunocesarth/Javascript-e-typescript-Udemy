// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Date

/* MARCO ZERO = 01/01/1970 
const tresHoras = 60 * 60 * 3 * 1000; //Segundos | Minutos | Horas | Milissegundos
const umDia = 60 * 60 * 24 * 1000;
const data = new Date(0 + tresHoras + umDia); //Date é uma função construtora, começa sempre com a letra maiúscula
*/

const data = new Date(); //Data atual
const data1 = new Date(2019, 3, 20, 15,14, 27); //Data formatada = a, m, d, h, M, s, ms | Mês vai de 0 a 11
const data2 = new Date('2019-04-20 20:20:59') //Data em string
const data3 = new Date(1656113657497); //Data em milissegundos
console.log(data2.toString()); 

console.log('Dia', data3.getDate()); //Pega o dia do mês
console.log('Mês', data3.getMonth()); //Pega o mês, começando do 0
console.log('Ano', data3.getFullYear()); //Pega o ano
console.log('Hora', data3.getHours()); //Pega a hora
console.log('Min', data3.getMinutes()); //Pega os minutos
console.log('Seg', data3.getSeconds()); //Pega os segundos
console.log('ms', data3.getMilliseconds()); //Pega os milissegundos
console.log('Dia semana', data3.getDay()); //Pega o número do dia da semana - 0 é domingo | 6 é sábado
console.log(Date.now()); //Milissegundos do marco zero até hoje

function zeroAEsquerda(num) {
    return num >= 10 ? num : `0${num}`;
}

function formataData(data4){
    const dia = zeroAEsquerda(data.getDate());
    const mes = zeroAEsquerda(data.getMonth() + 1);
    const ano = zeroAEsquerda(data.getFullYear());
    const hora = zeroAEsquerda(data.getHours());
    const min = zeroAEsquerda(data.getMinutes());
    const seg = zeroAEsquerda(data.getSeconds());

    return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`;
}

const data4 = new Date();
const dataBrasil = formataData(data4);
console.log(dataBrasil);