const endpointDaApiProdutos = `${baseURL}/api/produtos`;

getBuscarEntregues()
async function getBuscarEntregues() {
    const prod = await fetch(endpointDaApiProdutos)
    let entregues = await prod.json();
    exibirEntreguesNaTela(entregues);
}

const elementoParaInserirEntregues = document.getElementById('entregues');
const elementoParaInserirTextoDeUsuarioNaoLogado = document.getElementById('noLogin');
let input = document.getElementById("pesquisa");
let id = localStorage.getItem('id');

function exibirEntreguesNaTela(listaDeProdutos) {
    if (listaDeProdutos == "") {
        elementoParaInserirTextoDeUsuarioNaoLogado.innerHTML =
            `
         <p class="cont1">
            Ainda não há objetos registrados
         </p>
        `
    }
    else if (listaDeProdutos != "" && id == null || id == undefined) {
        elementoParaInserirTextoDeUsuarioNaoLogado.innerHTML =
            `
        <p class="cont1">
            Para saber mais detalhes dos produtos, faça login 
        </p>
        `
    }

    elementoParaInserirEntregues.innerHTML = '';
    listaDeProdutos.forEach(produto => {
        if (id == secretaria) {
            var imagemEntrega = `<img class="imgs" src="${produto.imagemEntrega}" />`
            var deletar =
                `
            <a class="btn" href="../paginas/paginaCard.html?id=${produto._id}"> Ver objeto </a>
            <button class="btn" onclick="deletar('${produto._id}');"> Excluir </button>
            `
        }
        if (id != null || id != undefined) {
            var imagemPrincipal = `<img class="imgs" src="${produto.imagemPrincipal}" />`
            var card = `<a class="btn" href="../paginas/paginaCard.html?id=${produto._id}"> Ver objeto </a>`
        }
        else {
            var imagemSemLogin = `<img class="imgs" src="${produto.imagemPrincipal}" />`

            var vazio = "";
        }

        if (produto.categoria === "Entregue") {
            elementoParaInserirEntregues.innerHTML += `
            <section class="secao4">
                <div class="centro">
                    <div class="secao4-div">
                        <div class="secao4-div-card">
                            ${imagemEntrega || imagemPrincipal || imagemSemLogin}
                            <h3> ${produto.nome} </h3> 
                            <p> ${produto.local} </p>
                            ${deletar || card || vazio}
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
        }).then(res => res.json().then(data => { exibirEntreguesNaTela(data) }))
    }
});