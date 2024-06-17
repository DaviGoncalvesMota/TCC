let nomeExibir = localStorage.getItem('nome');
const elementoParaInserirUsuario = document.getElementById('nome');


function exibirUsuarioNaTela(){
    if(nomeExibir == "" || nomeExibir == null || nomeExibir == undefined){
        elementoParaInserirUsuario.innerHTML += "ENTRAR";    
    }
    else{
        elementoParaInserirUsuario.innerHTML += `${nomeExibir}`;
    }
}

function editarPerfil(){
    if(nomeExibir != null || nomeExibir != undefined || nomeExibir != ""){
        window.location.href = '../paginas/paginaEditarUsuario.html'
    }
    else {
        window.location.href = '../paginas/paginaLogin.html'
    }
}