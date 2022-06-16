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
const removidoDoFinal = alunos.pop(); // Salva o elemento removido do array em uma variável
console.log(removidoDoFinal);//exibindo o elemento removido
console.log(alunos);
const removidoDoComeco = alunos.shift(); //Remove do começo do array
console.log(removidoDoComeco);

delete alunos[1];//Deleto o elemento, mas não altero o índice, então o índice fica vazio(undefined)

console.log(alunos[50]);//Consigo acessar um índice que não existe

console.log(alunos);
console.log(alunos.slice(0, 3)); //Escolho qual parte do array eu quero pegar, aqui vai do 0 ao 2, mas preciso usar o 3

console.log(alunos.slice(0, -2)); //Ele para a exibição deixando a quantidade de números selecionados

console.log(typeof alunos);//Array é um object
console.log(alunos instanceof Array); //Perguntando se alunos é uma instância de array, retorna true ou false