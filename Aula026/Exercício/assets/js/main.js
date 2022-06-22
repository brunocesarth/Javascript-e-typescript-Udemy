function meuEscopo() {
    const form = document.querySelector('.form');

    function calculaIMC(peso, altura) {
        resultado = peso / (altura * altura);
        console.log(resultado);
        return resultado;
        
    }

    function recebeEventoForm(evento) {
        evento.preventDefault();

        const peso = form.querySelector('.peso');
        const altura = form.querySelector(Number('.altura'));
        console.log(altura);
        calculaIMC(peso, altura);
    }
    form.addEventListener('submit', recebeEventoForm);
}

meuEscopo();