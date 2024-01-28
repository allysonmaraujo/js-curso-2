let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora do Desafio';

function verificarConsole() {
    console.log('O botão foi clicado');
}

function verificarAlerta() {
    alert('Eu amo JS')
}


function verificarPrompt() {
    let nomeDaCidade = prompt('Qual cidade você está?')
    alert(`Estive em ${nomeDaCidade} e lembrei de você!`)
}

function realizarSoma(){
    let primeiroNumero = prompt('Digite o primeiro número');
    let segundoNumero = prompt('Digite o segundo número');
    const somarDoisNumeros = Number(primeiroNumero) + Number(segundoNumero);
   alert(`A soma dos dois número é : ${somarDoisNumeros}`)
}