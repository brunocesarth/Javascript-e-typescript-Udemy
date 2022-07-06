//Break e Continue
//Ambas funcionam em todos os laços apresentados(for, for in, for of, while, do while)

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let numero of numeros) {
    if (numero === 2) {
        console.log('Pulei o número 2');
        continue;//Encontrando a palavra continue ele pula para a próxima iteração do laço e continua o código
    }

    if (numero === 7) {
        console.log('7 encontrado, saindo...');
        break; //Quando encontra a condição, ele sai do bloco
    }
    console.log(numero);
}

console.log('---===+++===---');//Divisão

for (let i in numeros) {
    let numero = numeros[i];
    if (numero === 2) {
        console.log('Pulei o número 2');
        continue;
    }

    if (numero === 7) {
        console.log('7 encontrado, saindo...');
        break;
    }
    console.log(numero);
}

console.log('---===+++===---');//Divisão

for (let i = 0; i <= numeros.length; i++) {
    let numero = numeros[i];
    if (numero === 2) {
        console.log('Pulei o número 2');
        continue;
    }

    if (numero === 7) {
        console.log('7 encontrado, saindo...');
        break;
    }
    console.log(numero);
}

console.log('---===+++===---');//Divisão

let j = 0;
while (j < numeros.length) {
    let numero = numeros[j];
    if (numero === 2) {
        console.log('Pulei o número 2');
        j++;
        continue;
    }

    console.log(numero);

    if (numero === 7) {
        console.log('7 encontrado, saindo...');
        j++;
        break;
    }
    j++;
}

console.log('---===+++===---');//Divisão

let k = 0;
do {
    let numero = numeros[k];
    if (numero === 2) {
        console.log('Pulei o número 2');
        k++;
        continue;
    }
    console.log(numero);

    if (numero === 7) {
        console.log('7 encontrado, saindo...');
        k++;
        break;
    }
    k++;
} while (k < numeros.length);