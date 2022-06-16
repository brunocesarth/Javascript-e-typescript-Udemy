//Array é uma lista ou coleção de coisas
//No javascript o array aceita diversos tipos de dados
//Arrays também são indexados, só que por elementos
//               0         1       2
const alunos = ['Luiz', 'Maria', 'João']; 
console.log(alunos);//Exibo o array completo
console.log(alunos[0]);//Acesso o índice do array, aqui o índice 0 = Luiz
console.log(alunos[2]);//Acesso o índice do array, aqui o índice 0 = João
console.log(alunos.length); //Trás o tamanho do array

alunos[0] = 'Eduardo'; //Editei o array no índice 0 e substitui Luiz por Eduardo
alunos[3] = 'Luiza'; //Adiciono um item ao array, sabendo o tamanho do array

alunos[alunos.length] = 'Fernando'; //[alunos.length] trás o final do array
alunos[alunos.length] = 'Sebastião';
alunos[alunos.length] = 'Clodoaldo';
alunos.push('Fábio'); //Push: Adiciona um elemento ao final do array
alunos.push('Bruna');

console.log(alunos);

alunos.unshift('Carlos'); // Unshift: Adiciona um elemento no início do array

console.log(alunos);

alunos.pop(); //Remove do final do array
console.log(alunos);