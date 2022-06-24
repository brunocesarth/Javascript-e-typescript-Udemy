// CONDIÇÃO=?| 'VALOR PARA VERDADEIRO' : 'VALOR PARA FALSO'
// Pode encurtar o código em partes que precisa de if e else
const pontuacaoUsuario = 1000;
/* if (pontuacaoUsuario >= 1000) {
    console.log('Usuário VIP');
} else {
    console.log('Usuário normal');
} */

const nivelUsuario = pontuacaoUsuario >= 1000 ? 'Usuário Vip' : 'Usuário Normal';

const corUsuario = null;
const corPadrao = corUsuario || 'Preta'; //Usando OU na operação ternária

console.log(nivelUsuario, corPadrao);

const pontuacaoUsuario1 = 500;
const nivelUsuario1 = pontuacaoUsuario1 >= 1000 ? 'Usuário VIP' : 'Usuário normal';
const corUsuario1 = 'Pink'
const corPadrao1 = corUsuario1 || 'Preta';

console.log(nivelUsuario1, corPadrao1);