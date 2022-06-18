/* 
Entre 0 & 11 - Bom dia!
Entre 12 & 17 - Boa tarde!
Entre 18 & 23 - Boa noite!
*/
//IF pode ser usado sozinho, tendo só uma condição
//Para usar o ELSE eu preciso de um if antes
//Posso ter vários ELSE IF'S nas checagens
//Só pode ter um ELSE na checagem
//Posso usar condições sem else if, somente com if e else

const hora = 20; //Simulação de um horário do dia, aqui representando 10 horas da manhã

if (hora >= 0 && hora <= 11) {
    console.log('Bom dia!');
} else if (hora >= 12 && hora <= 17) {
    console.log('Boa tarde!');
} else if (hora >= 18 && hora <= 23) {
    console.log('Boa noite!');
} else {
    console.log('Olá!');
}

//Exemplo
const tenhoGrana = true;
if (tenhoGrana) {
    console.log('Vou sair de casa');
} else {
    console.log('Não vou sair de casa');
}