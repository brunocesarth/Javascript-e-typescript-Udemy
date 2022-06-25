//SWITCH/CASE
const data = new Date('1987-04-20 00:00:00');
const diaSemana = data.getDay();
let diaSemanaTexto;
//Utilizando IF para verificar o dia da semana
if (diaSemana === 0) {
    diaSemanaTexto = 'Domingo';
} else if (diaSemana === 1) {
    diaSemanaTexto = 'Segunda';
} else if (diaSemana === 2) {
    diaSemanaTexto = 'Terça';
} else if (diaSemana === 3) {
    diaSemanaTexto = 'Quarta';
} else if (diaSemana === 4) {
    diaSemanaTexto = 'Quinta';
} else if (diaSemana === 5) {
    diaSemanaTexto = 'Sexta';
} else if (diaSemana === 6) {
    diaSemanaTexto = 'Sábado';
}
console.log(diaSemana, diaSemanaTexto);

// Utilizando switch/case para verificar o dia da semana
const data1 = new Date('1987-04-21 00:00:00');
const diaSemana1 = data1.getDay();
let diaSemanaTexto1;

switch (diaSemana1) {
    case 0:
        diaSemanaTexto1 = 'Domingo';
        break;//Utilizado para sair da condição caso ela seja atendida - NÃO PODE ESQUECER DE USAR
    case 1:
        diaSemanaTexto1 = 'Segunda';
        break;
    case 2:
        diaSemanaTexto1 = 'Terça';
        break
    case 3:
        diaSemanaTexto1 = 'Quarta';
        break
    case 4:
        diaSemanaTexto1 = 'Quinta';
        break
    case 5:
        diaSemanaTexto1 = 'Sexta';
        break;
    case 6:
        diaSemanaTexto1 = 'Sábado';
        break;
    default:
        diaSemanaTexto1 = ''; //Funciona como else final do if
}
console.log(diaSemana1, diaSemanaTexto1);


//Função com switch
const data2 = new Date('1987-04-22 00:00:00');
const diaSemana2 = data2.getDay();

function getDiaSemanaTexto(diaSemana2) {
    let diaSemanaTexto2;
    switch (diaSemana2) {
        case 0:
            diaSemanaTexto2 = 'Domingo';
            return diaSemanaTexto2;
        case 1:
            diaSemanaTexto2 = 'Segunda';
            return diaSemanaTexto2;
        case 2:
            diaSemanaTexto2 = 'Terça';
            return diaSemanaTexto2;
        case 3:
            diaSemanaTexto2 = 'Quarta';
            return diaSemanaTexto2;
        case 4:
            diaSemanaTexto2 = 'Quinta';
            return diaSemanaTexto2;
        case 5:
            diaSemanaTexto2 = 'Sexta';
            return diaSemanaTexto2;
        case 6:
            diaSemanaTexto2 = 'Sábado';
            return diaSemanaTexto2;
        default:
            diaSemanaTexto2 = '';
    }
}

const diaSemanaTexto2 = getDiaSemanaTexto(diaSemana2);
console.log(diaSemana2, diaSemanaTexto2);