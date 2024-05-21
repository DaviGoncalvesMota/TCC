const elementoParaInserirProdutos = document.getElementById('produtos');

function exibirDadosNaTela(listaDeProdutos) {
    elementoParaInserirProdutos.innerHTML = '';
    listaDeProdutos.forEach(produto => {
        elementoParaInserirProdutos.innerHTML += `
        <div>
        <h1 style="color: green"> ${produto.nome} </h1> 
        <h2> ${produto.telefone} </h2>
        <h2> ${produto.local} </h2>
        <h2> ${produto.descricao} </h2>
        </div>
        `
    });
}