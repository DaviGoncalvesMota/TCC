let nomeExibir = localStorage.getItem('nome');
const elementoParaInserirUsuario = document.getElementById('nome');
const elementoParaDeslogar = document.getElementById('deslogar');


function exibirUsuarioNaTela() {
    if (nomeExibir == "" || nomeExibir == null || nomeExibir == undefined) {
        elementoParaInserirUsuario.innerHTML += "ENTRAR";
    }
    else {
        elementoParaInserirUsuario.innerHTML += `${nomeExibir}`;

        elementoParaDeslogar.innerHTML += `
            <a onclick="deslogar()"> Sair </a>
        `
    }
}

function perfil(){
    if(nomeExibir != null || nomeExibir != undefined){
        window.location.href = "../paginas/paginaEditarUsuario.html";
    }
    else {
        window.location.href = '../paginas/paginaLogin.html';
    }
}

function deslogar() {
    localStorage.removeItem('nome');
    localStorage.removeItem('id');
    window.location.reload(true);
}