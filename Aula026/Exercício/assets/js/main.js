function meuEscopo() {
    const form = document.querySelector('.form');

    function recebeEventoForm(evento) {
        evento.preventDefault();

        let peso = form.querySelector('.peso');
        let altura = form.querySelector('.altura');
        calculaIMC(peso.value, altura.value);
    }
    
    form.addEventListener('submit', recebeEventoForm);

}

function calculaIMC(pesoFun, alturaFun) {
    let resultadoFun = pesoFun / (alturaFun * alturaFun);
    return resultadoFun;
};

meuEscopo();
