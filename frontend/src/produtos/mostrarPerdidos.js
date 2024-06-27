const elementoParaInserirPerdidos = document.getElementById('perdidos');
let input = document.getElementById('pesquisa');
let usuario = localStorage.getItem('nome');

function exibirPerdidosNaTela(listaDeProdutos) {
    elementoParaInserirPerdidos.innerHTML = '';
    listaDeProdutos.forEach(produto => {
        if (usuario != null || usuario != undefined) {
            var editarExcluir = `
                <a href="../paginas/paginaEditarProdutos.html?id=${produto._id}">
                    <button class="btn"> Editar </button> 
                </a>
                    <button class="btn" onclick="deletar('${produto._id}');"> Excluir </button>
                `
        }
        else {
            var vazio = "";
        }
        if (produto.ondeEncontrar === "Membro Docente") {
            elementoParaInserirPerdidos.innerHTML += `
        <section class="secao4">
            <div class="centro">
                <div class="secao4-div">
                    <div class="secao4-div-card">
                        <h3> ${produto.nome} </h3> 
                        <p> ${produto.local} </p>
                        <p> Cadastrado por ${produto.userName} </p>
                        ${editarExcluir || vazio} 
                        <a class="btn" href="../paginas/paginaCard.html?id=${produto._id}"> Ver Produto </a>
                    </div>
                </div>  
            </div>
        </section>
        `
        }
    })
}

input.addEventListener("keypress", function (evento) {
    if (evento.key === "Enter") {
        evento.preventDefault();
        const valorInput = document.getElementById("pesquisa").value;
        fetch(`${baseURL}/api/buscarproduto?nome=${valorInput}`, {
            method: "GET",
            headers: {
                'content-type': 'application/json'
            }
        }).then(res => res.json().then(data => {exibirPerdidosNaTela(data)}))
    }
});

function botaoCadastro() {
    if (usuario == null || usuario == undefined) {
        window.location.href = '../paginas/paginaLogin.html';
    }
    else {
        window.location.href = '../paginas/paginaCadastroProdutos.html';
    }
}