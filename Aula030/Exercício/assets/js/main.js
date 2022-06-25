const mostraData = document.querySelector('h1');

function getDiaSemanaTexto(diaDaSemana) {
    let diaDaSemanaTexto;
    switch (diaDaSemana) {
        case 0:
            diaDaSemanaTexto = 'Domingo';
            return diaDaSemanaTexto;
        case 1:
            diaDaSemanaTexto = 'Segunda';
            return diaDaSemanaTexto;
        case 2:
            diaDaSemanaTexto = 'Terça';
            return diaDaSemanaTexto;
        case 3:
            diaDaSemanaTexto = 'Quarta';
            return diaDaSemanaTexto;
        case 4:
            diaDaSemanaTexto = 'Quinta';
            return diaDaSemanaTexto;
        case 5:
            diaDaSemanaTexto = 'Sexta';
            return diaDaSemanaTexto;
        case 6:
            diaDaSemanaTexto = 'Sábado';
            return diaDaSemanaTexto;
        default:
            diaDaSemanaTexto = '';
    }
}
function getMesTexto(mes) {
    let mesTexto;
    switch (mes) {
        case 0:
            mesTexto = 'Janeiro';
            return mesTexto;
        case 1:
            mesTexto = 'Fevereiro';
            return mesTexto;
        case 2:
            mesTexto = 'Março';
            return mesTexto;
        case 3:
            mesTexto = 'Abril';
            return mesTexto;
        case 4:
            mesTexto = 'Maio';
            return mesTexto;
        case 5:
            mesTexto = 'Junho';
            return mesTexto;
        case 6:
            mesTexto = 'Julho';
            return mesTexto;
        case 7:
            mesTexto = 'Agosto';
            return mesTexto;
        case 8:
            mesTexto = 'Setembro';
            return mesTexto;
        case 9:
            mesTexto = 'Outubro';
            return mesTexto;
        case 10:
            mesTexto = 'Novembro';
            return mesTexto;
        case 11:
            mesTexto = 'Dezembro';
            return mesTexto;
        default:
            mesTexto = '';
    }
}

const data = new Date();
const diaDaSemana = data.getDay();
const dia = data.getDate();
const mes = data.getMonth();
const ano = data.getFullYear();
const hora = data.getHours();
const minutos = data.getMinutes();
const diaDaSemanaTexto = getDiaSemanaTexto(diaDaSemana);
const mesTexto = getMesTexto(mes);
mostraData.innerHTML = `${diaDaSemanaTexto}, ${dia} de ${mesTexto} de ${ano} ${hora}:${minutos}`;