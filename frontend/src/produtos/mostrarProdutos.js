const elementoParaInserirProdutos = document.getElementById('produtos');
let input = document.getElementById("pesquisa");

function exibirDadosNaTela(listaDeProdutos) {
    elementoParaInserirProdutos.innerHTML = '';
    listaDeProdutos.forEach(produto => {
        elementoParaInserirProdutos.innerHTML += `
        <section class="secao4">
            <div class="centro">
                <div class="secao4-div">
                    <div class="secao4-div-card">
                        <h3> ${produto.nome} </h3> 
                        <p> ${produto.telefone} </p>
                        <p> ${produto.local} </p>
                        <p> ${produto.descricao} </p>
                        <p> ${produto.ondeEncontrar}</p>
                        <p> ${produto.userName}</p>
                        <button class="btn" onclick="deletar('${produto._id}');"> Excluir </button>
                        <a href="../paginas/paginaEditarProdutos.html?id=${produto._id}">
                            <button class="btn" > Editar </button> 
                        </a>
                    </div>
                </div>  
            </div>
        </section>
        `
    });
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
        }).then(res => res.json().then(data => {exibirDadosNaTela(data)}))
    }
});
