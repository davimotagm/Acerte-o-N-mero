// Função para gerar os números aleatórios
function gerarNumeroAleatorio() {
    let numeroAleatorio = Math.floor(Math.random() * 20) + 1;
    return numeroAleatorio;
}

// Declarando o botão em uma variável.
const button = document.querySelector('button');

// função que ocorre quando o botão é clicado
button.addEventListener('click', function (event) {
    event.preventDefault();

// recebe um palpite (valor inserido) e compara com o valor gerado aleatoriamente.
    function verificarPalpite() {
        let numeroAleatorio = gerarNumeroAleatorio();
        let tentativa = 1;
        let palpite = prompt("Digite um número");

        while (palpite != numeroAleatorio) {
            tentativa++; /* Armazena a quantidade de tentativas do usuário */

            alert("Tente novamente");

            numeroAleatorio = gerarNumeroAleatorio();
            palpite = prompt("Digite um número");
        }

        alert(`Você acertou na tentativa ${tentativa}.`);
    }
    verificarPalpite();
});
