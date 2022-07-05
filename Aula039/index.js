// While e Do While
let i = 0;

// Enquanto i menor ou igual a 10
while (i <= 10) {
    console.log(i);
    i++; //iteração de 1 em 1
}

console.log('---===+++===---');//Divisão

const nome = 'Luiz';
let j = 0;
while (j < nome.length) { 
    console.log(nome[j]);
    j++;
}

console.log('---===+++===---');//Divisão

function random(min, max) {
    const r = Math.random() * (max - min) + min;
    return Math.floor(r);
}

const min = 1;
const max = 50;
let rand = random(min, max);

while (rand !== 10) {
    rand = random(min, max);
    console.log(rand);
}

//O laço while é mais utilizado quando não sabemos quando o laço vai terminar
//While checa a condição no início

console.log('---===+++===---');//Divisão

//Faça... Enquanto
//Checa a condição no final, então ele executa pelo menos uma vez
do {
    rand = random(min, max);
    console.log(rand);
} while (rand !== 10);