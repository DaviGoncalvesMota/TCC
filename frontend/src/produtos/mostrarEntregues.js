const endpointDaApiProdutos = `${baseURL}/api/produtos`;
const elementoParaInserirEntregues = document.getElementById('entregues');
const elementoParaInserirTextoDeProdutos = document.getElementById('mensagem');
let input = document.getElementById("pesquisa");
let id = localStorage.getItem('id');
var loader = document.getElementById("loader");
var content = document.getElementById("content");

content.style.display = "none"

getBuscarEntregues()
async function getBuscarEntregues() {
    const prod = await fetch(endpointDaApiProdutos)
    let entregues = await prod.json();
    exibirEntreguesNaTela(entregues);
    loader.style.display = "none",
    content.style.display = "block"
}

function exibirEntreguesNaTela(listaDeProdutos) {
    fetch(`${baseURL}/api/produtos?categoria=Entregue`).then(res => res.json()).then(data => {
        if (data == "") {
            elementoParaInserirTextoDeProdutos.innerHTML +=
            `
            <p class="cont1">
                Ainda não há objetos registrados
            </p>
            `
        }
        else if (data != "" && id == "" || id == null || id == undefined) {
            elementoParaInserirTextoDeProdutos.innerHTML =
            `
            <p class="cont1">
                Para saber mais detalhes dos produtos, faça login 
            </p>
            `
        }
    })

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

        loader.style.display = "flex"

        fetch(`${baseURL}/api/buscarproduto?nome=${valorInput}`, {
            method: "GET",
            headers: {
                'content-type': 'application/json'
            }
        }).then(res => res.json().then(data => {
            exibirEntreguesNaTela(data)
            loader.style.display = "none"
        }))
    }
});