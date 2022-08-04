function criaCalculadora() {
    return {
        //Atributos ficam em cima
        display: document.querySelector('.display'),

        //Métodos ficam em baixo
        inicia() {
            this.cliqueBotoes();
            this.pressionaEnter();
        },

        pressionaEnter() {
            this.display.addEventListener('keyup', e => {
                if (e.keyCode === 13) {
                    this.realizaConta();
                }
            })
        },

        realizaConta() {
            let conta = this.display.value;

            try {
                conta = eval(conta);
                if (!conta) {
                    alert('Conta inválida');
                    return;
                }

                this.display.value = conta;
            } catch (e) {
                alert('Conta inválida');
                return;
            }
        },

        clearDisplay() {
            this.display.value = ' ';
        },

        apagaUm() {
            this.display.value = this.display.value.slice(0, -1);
        },

        cliqueBotoes() {
            //this aqui é a calculadora
            document.addEventListener('click', (e) => {
                const el = e.target;

                if (el.classList.contains('btn-num')) {
                    this.btnParaDisplay(el.innerText);
                }

                if (el.classList.contains('btn-clear')) {
                    this.clearDisplay();
                }

                if (el.classList.contains('btn-del')) {
                    this.apagaUm();
                }

                if (el.classList.contains('btn-eq')) {
                    this.realizaConta();
                }

                this.display.focus();
            });
        },

        btnParaDisplay(valor) {
            this.display.value += valor;
        },

    };
}

const calculadora = criaCalculadora();
calculadora.inicia();