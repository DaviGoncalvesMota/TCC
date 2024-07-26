const endpointDaApiProdutos = `${baseURL}/api/produtos`;

getBuscarAchados()
async function getBuscarAchados() {
    const prod = await fetch(endpointDaApiProdutos)
    let achados = await prod.json();
    exibirAchadosNaTela(achados);
}


getBuscarPerdidos()
async function getBuscarPerdidos() {
    const prod = await fetch(endpointDaApiProdutos)
    let perdidos = await prod.json();
    exibirPerdidosNaTela(perdidos);
}
