const h1 = document.querySelector('.container h1');
const data = new Date();

function zeroAEsquerda(num) {
    return num >= 10 ? num : `0${num}`;
}

function getDiaSemanaTexto(diaDaSemana) {
    const diasSemana = ['Domingo', 'Segunda-Feira','Terça-Feira','Quarta-Feira','Quinta-Feira','Sexta-Feira', 'Sábado']
    const diasSemana[diaDaSemana];
}

function getNomeMes(numeroMes) {
    const meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']
    return meses[numeroMes];
}

function criaData(data) {
    const diaSemana = data.getDay();
    const numeroMes = data.getMonth();

    const nomeDia = getDiaSemanaTexto(diaSemana);
    const nomeMes = getNomeMes(numeroMes);

    return `${nomeDia}, ${data.getDate()} de ${nomeMes} de ${data.getFullYear()} ${zeroAEsquerda(data.getHours())}:${zeroAEsquerda(data.getMinutes())}`;
}

h1.innerHTML = criaData(data);