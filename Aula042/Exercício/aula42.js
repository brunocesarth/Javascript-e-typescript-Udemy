/*
Escreva uma função chamada ePaisagem que recebe dois argumentos, largura e altura de uma imagem (number).
Retorne true se a imagem estiver no modo paisagem.
 */
const ePaisagem = (larg, alt) => larg > alt ? true : false;
console.log(ePaisagem(3, 2));