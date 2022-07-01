//FOR - Clássico - Estrutura de repetição
// console.log('Linha 0');
// console.log('Linha 1');
// console.log('Linha 2');
// console.log('Linha 3');
// console.log('Linha 4');
// console.log('Linha 5');

//i - index
for (let i = 0; i <= 5; i++) {
    console.log(`Linha ${i}`);
} //Cada vez que o laço se repete, o valor de i muda

for (let i = -100; i <= 100; i += 10) {
    console.log(`Linha ${i}`);
} //Pode ser feito partindo de um número negativo também, e pulando quantas casas forem estipuladas na última condição (i += 10)

for (let i = 500; i >= 400; i -= 10) {
    console.log(`Linha ${i}`);
} //E pode ser feito de forma decrescente também

//Exemplo do instrutor com operador ternário
for (let i = 0; i <= 10; i++) {
    const par = i % 2 === 0 ? 'par' : 'ímpar';
    console.log(i,par);
}

 // Meu exemplo de teste
for (let i = 0; i <= 10; i++) {
    if (i % 2 === 0) {
        console.log(`${i} é par`);
    } else {
        console.log(`${i} é impar`);
    }
}

const frutas = ['Maçã', 'Pêra', 'Uva','Banana', 'Melão', 'Melancia', 'Jabuticaba'];

for (let i = 0; i < frutas.length; i++) {
    console.log(`Índice ${i}`,frutas[i]);
}