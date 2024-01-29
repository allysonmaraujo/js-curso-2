let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}
function textoDeInicioDoJogo(){
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');
    exibirTextoNaTela('h1', 'Jogo do número secreto');
}

textoDeInicioDoJogo();

function verificarChute() {
    let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
    let fraseVencedora = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}`
    let chute = document.querySelector('input').value;
    
    if (chute == numeroSecreto){
        exibirTextoNaTela('h1', 'Acertou!');
        exibirTextoNaTela('p', fraseVencedora);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if ( chute > numeroSecreto){
            exibirTextoNaTela('p','O número secreto é menor');
        } else {
            exibirTextoNaTela('p', 'O número secreto é maior');
        }
        tentativas++;
        limparCampo();
    }
}

function gerarNumeroAleatorio() {
    return parseInt(Math.random() * 10 + 1);
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    textoDeInicioDoJogo();
    limparCampo();
    tentativas = 1;
    document.getElementById('reiniciar').setAttribute('disabled', true);
}