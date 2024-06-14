let nomeExibir = localStorage.getItem('nome');
const elementoParaInserirUsuario = document.getElementById('nome');


function exibirUsuarioNaTela(){
    if(nomeExibir == "" || nomeExibir == null || nomeExibir == undefined){
        elementoParaInserirUsuario.innerHTML += "VISITANTE";    
    }
    else{
        elementoParaInserirUsuario.innerHTML += `${nomeExibir}`;
    }
}

