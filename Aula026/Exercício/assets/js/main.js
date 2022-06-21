function calculaIMC(peso, altura) {
    return peso / (altura * altura)
}

function BuscaInfo() {
    const form = document.querySelector('.form');
    const peso = form.querySelector('.Peso');
    const altura = form.querySelector('.Altura');
    calculaIMC(peso, altura);

    function recebeEventoForm(evento) {
        evento.preventDefault();
    }
    form.addEventListener('Submit', recebeEventoForm);
}

BuscaInfo();