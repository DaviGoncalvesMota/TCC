let nomeExibir = localStorage.getItem('nome');
const elementoParaInserirUsuario = document.getElementById('nome');

function exibirUsuarioNaTela(){
    elementoParaInserirUsuario.innerHTML += `${nomeExibir}`;
}

