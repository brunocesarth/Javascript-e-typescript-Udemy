//Funções recursivas
//É uma função que chama ela mesmo de volta

function recursiva(max) {
    if (max >= 10) return;
    max++;
    console.log(max);
    recursiva(max);
}
//Funciona como um laço de repetição da função
//Função recursiva possui um limite(aparentemente o limite é variável)
recursiva(0);
