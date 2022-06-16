const numero = Number(prompt('Digite um número: '));
const numeroTitulo = document.getElementById('numero-titulo');//Selecionando o campo do HTML que eu quero mexer pelo id
const texto = document.getElementById('texto');
/* Não repetir ID para mais de um elemento por página */

let raizQ = Math.sqrt(numero);
let inteiro = Number.isInteger(numero);
let ehUmNumero = Number.isNaN(numero);
let paraBaixo = Math.floor(numero);
let paraCima = Math.ceil(numero);
let duasCasas = numero.toFixed(2);

numeroTitulo.innerHTML = numero;
texto.innerHTML = `<p>Raiz quadrada: ${raizQ}</p>
<p>${numero} é inteiro: ${inteiro}</p>
<p>É NaN: ${ehUmNumero}</p>
<p>Arredondando para baixo: ${paraBaixo}</p>
<p>Arredondando para cima: ${paraCima}</p>
<p>Com duas casas decimais: ${duasCasas}</p>`;