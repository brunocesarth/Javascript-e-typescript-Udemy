const verdadeira = true;

let nome = 'Luiz';//Criando
var nome2 = 'Luiz';

//Let tem escopo de bloco {...bloco}
//Var só tem escopo de função
var nome2 = 'Ótavio';

if (verdadeira) {
    let nome = 'Ótavio'; //Por ter escopo de bloco consigo criar novamente aqui
    var nome2 = 'Rogério'; //Redeclarando
    console.log(nome, nome2);

    //BLOCO ANINHADO
    if (verdadeira) {
        let nome = 'Outra Coisa'; //Se não encontrasse essa, procuraria a do bloco anterior, se não encontrasse procuraria no global
        var nome2 = 'Ronaldo'; //Redeclarando
        console.log(nome, nome2);
    }
}
console.log(nome, nome2);


function falaOi (){
    var sobrenome = 'Miranda';
    if (verdadeira) {
        let nome3 = 'Luiz'; //Não posso usar essa variável criada dentro do bloco, fora do bloco
        console.log(sobrenome);
        console.log('Tentativa 1',nome3);
    }
    /* console.log('Tentativa 2',nome3); */
}
falaOi();

console.log(sobrenome);
console.log(sobrenome1);

var sobrenome = 'Miranda';//O JavaScript eleva a declaração da variável para o início da execução, por isso aparece como undefined, manda só o nome, sem o valor

let sobrenome1 = 'Miranda';//Aqui ele gera um erro