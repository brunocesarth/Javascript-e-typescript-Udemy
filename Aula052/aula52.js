//Escopo léxico
const nome = 'Luiz';

function falaNome() {
    console.log(nome);
} //Aqui ele acessa a variável que foi declarada no escopo global
falaNome();

function usaFalaNome() {
    falaNome();
}
usaFalaNome();

function falaNome1() {
    //const nome = 'Ótavio';
    console.log(nome);
} //Aqui ele acessa a variável declarada dentro da função 
falaNome1();

function usaFalaNome1() {
    const nome = 'Ótavio';
    falaNome1();
} //A função lembra onde ela foi declarada,então não adianta criar a variável nome aqui que ela não será executada
usaFalaNome1();