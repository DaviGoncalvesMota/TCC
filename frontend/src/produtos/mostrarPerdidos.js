const endpointDaApiProdutos = `${baseURL}/api/produtos`;

getBuscarPerdidos()
async function getBuscarPerdidos() {
    const prod = await fetch(endpointDaApiProdutos)
    let perdidos = await prod.json();
    exibirPerdidosNaTela(perdidos);
}

const elementoParaInserirPerdidos = document.getElementById('perdidos');
const elementoParaInserirTextoDeUsuarioNaoLogado = document.getElementById('noLogin');
const elementoParaInserirBotaoCadastro = document.getElementById('botaoCadastro');
let input = document.getElementById('pesquisa');
let id = localStorage.getItem('id');

function exibirPerdidosNaTela(listaDeProdutos) {
    elementoParaInserirPerdidos.innerHTML = '';
    if (id == secretaria) {
        elementoParaInserirBotaoCadastro.innerHTML += `
            <div style="cursor: pointer;" onclick="botaoCadastro();">
                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css">
                <div class="btn-whatsapp pulsaDelay">
                    <i class='bx bx-plus bx-flip-horizontal' style='color:#ffffff'></i>
                </div>
            </div>
        `
    }
    listaDeProdutos.forEach(produto => {
        if (id == secretaria) {
            var alterar = `
                <a href="../paginas/paginaEditarProdutos.html?id=${produto._id}">
                    <button class="btn"> Editar </button> 
                </a>
                    <button class="btn" onclick="deletar('${produto._id}');"> Excluir </button>
                    <a class="btn" href="../paginas/paginaCard.html?id=${produto._id}"> Ver Produto </a>
                `;
        }

        if(id != undefined || id != null){
            var card = `<a class="btn" href="../paginas/paginaCard.html?id=${produto._id}"> Ver Produto </a>`
        }
        else {
            elementoParaInserirTextoDeUsuarioNaoLogado.innerHTML =
               `
           <p class="cont1">
               Para saber mais detalhes dos produtos, faça login 
           </p>
               `

           var vazio = "";
       }

        if (produto.categoria === "Perdidos") {
            elementoParaInserirPerdidos.innerHTML += `
        <section class="secao4">
            <div class="centro">
                <div class="secao4-div">
                    <div class="secao4-div-card">
                        <h3> ${produto.nome} </h3> 
                        <p> ${produto.local} </p>
                        ${alterar || card || vazio} 
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
        }).then(res => res.json().then(data => {exibirPerdidosNaTela(data) }))
    }
});