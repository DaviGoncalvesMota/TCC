const endpointDaApiUsuarios = `${baseURL}/api/users`;

getBuscarAPIUsuarios()
async function getBuscarAPIUsuarios() {
    const user = await fetch(endpointDaApiUsuarios)
    let usuarios = await user.json()
    exibirUsuarioNaTela(usuarios[0]);
}