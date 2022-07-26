//Funções Fábrica(Factory Functions)
function criaPessoa(nome, sobrenome) {
    return {
        nome, sobrenome
    };
}
const p = criaPessoa('Luiz', 'Ótavio');
console.log(p);

function criaPessoa1(nome, sobrenome, altura, peso) {
    return {
        nome,
        sobrenome,

        //Getter
        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`;
        },

        //Setter
        set nomeCompleto(valor) {
            valor = valor.split(' ');//Dividindo o valor recebido pelos espaços em branco, e criando um array na variável valor
            this.nome = valor.shift(); //Estou atribuindo o primeiro valor do array ao elemento nome
            this.sobrenome = valor.join(' ');
        },

        fala(assunto = 'falando sobre NADA.') {
            return `${this.nome} está ${assunto}`;//this se refere a pessoa que chamou o que está executando, o this aqui é p1
        },

        altura,
        peso,
        //Getter - a gente só quer OBTER o valor
        get imc() {
            const indice = this.peso / (this.altura ** 2);
            return indice.toFixed(2);
        }
    };
}

//Colocando o get antes do imc, o imc passa a "fingir" que é um atributo

const p1 = criaPessoa1('Luiz', 'Ótavio', 1.8, 80);
/* console.log(p1.imc()); executando o método */
const p2 = criaPessoa1('Maria', 'Joaquina', 1.6, 42);
/* console.log(p2.imc()); executando o método */
console.log(p1.fala('falando sobre JS'));
console.log(p2.fala('falando sobre JS'));
console.log(p1.nome);//Isso é a mesma coisa que this.nome, se refere ao atributo nome da variável p1
console.log(p1.nome);
console.log(p1.sobrenome);
console.log(p1.imc); //Chamando o IMC como se ele fosse um atributo e não uma função

/* console.log(p1.nomeCompleto()); Aqui estamos executando o nomeCompleto(), porque ele é um método */
console.log(p1.nomeCompleto);
p1.nomeCompleto = 'Maria Oliveira Silva';
console.log(p1.nomeCompleto);
console.log(p1.nome);
console.log(p1.sobrenome);
console.log(p1.fala())

const p3 = criaPessoa1('Luiz', 'Ótavio', 1.8, 80);
const p4 = criaPessoa1('João', 'Ótavio', 1.90, 57);
const p5 = criaPessoa1('Junior', 'Ótavio', 1.5, 110);

console.log(p3.imc);
console.log(p4.imc);
console.log(p5.imc);