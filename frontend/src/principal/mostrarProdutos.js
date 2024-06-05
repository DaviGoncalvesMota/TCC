const elementoParaInserirProdutos = document.getElementById('produtos');
let input = document.getElementById("pesquisa");


function exibirDadosNaTela(listaDeProdutos) {
    elementoParaInserirProdutos.innerHTML = '';
    listaDeProdutos.forEach(produto => {
        elementoParaInserirProdutos.innerHTML += `
        <div>
        <h1 style="color: green"> ${produto.nome} </h1> 
        <h2> ${produto.telefone} </h2>
        <h2> ${produto.local} </h2>
        <h2> ${produto.descricao} </h2>
        <h2> ${produto.ondeEncontrar}</h2>
        <button onclick="deletar('${produto._id}');"> Excluir </button>
        <a href="../cadastro/editarProdutos.html?id=${produto._id}">
         <button> Editar </button> 
         </a>
        </div>
        `
    });
}

input.addEventListener("keypress", function (evento) {
    if (evento.key === "Enter") {
        evento.preventDefault();
        const valorInput = document.getElementById('pesquisa').value;
        fetch(`${baseURL}/api/buscarproduto?nome=${valorInput}`, {
            method: "GET",
            headers: {
                'content-type': 'application/json'
            }
        }).then(res => res.json().then(data => { exibirDadosNaTela(data) }))
    }
});
