const paragrafos = document.querySelector('.paragrafos');
const ps = document.querySelectorAll('p'); //querySelectorAll seleciona todos os elementos da página com o parâmetro passado

const estilosBody = getComputedStyle(document.body);//Pega todos os estilos utilizados no componente escolhido
const backgroundColorBody = estilosBody.backgroundColor;

for (let p of ps) {
    p.style.backgroundColor = backgroundColorBody;    
    p.style.color = 'white';
}