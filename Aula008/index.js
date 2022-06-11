const nome = 'Bruno Cesar';
const sobrenome = 'Machado Thobias';
const idade = 30;
const peso = 82;
const alturaEmM = 1.71;
let indiceMassaCorporal;
let anoNascimento;
indiceMassaCorporal = peso / (alturaEmM * alturaEmM);
anoNascimento = 2022 - idade;

//TEMPLATE STRINGS

console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso} kg, tem ${alturaEmM} de altura e seu IMC é de ${indiceMassaCorporal.toFixed(2)}.`);
console.log(`${nome} nasceu em ${anoNascimento-1}.`);