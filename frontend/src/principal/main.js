const endpointDaApiProdutos = 'http://localhost:3003/api/produtos';
const endpointDaApiUsers = 'http://localhost:3003/api/users';

getBuscarAPI()
async function getBuscarAPI() {
    const prod = await fetch(endpointDaApiProdutos)
    const users = await fetch(endpointDaApiUsers)
    let produtos = await prod.json()
    let usuarios = await users.json()
    exibirDadosNaTela(produtos, usuarios);
}
