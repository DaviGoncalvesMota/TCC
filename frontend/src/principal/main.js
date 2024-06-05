const endpointDaApiProdutos = `${baseURL}/api/produtos`;

getBuscarAPI()
async function getBuscarAPI() {
    const prod = await fetch(endpointDaApiProdutos)
    let produtos = await prod.json()
    exibirDadosNaTela(produtos);
}
