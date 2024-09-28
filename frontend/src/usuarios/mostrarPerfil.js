let nomeExibir = localStorage.getItem('nome');
const submenu = document.getElementById('submenu');

function exibirUsuarioNaTela() {
    if (nomeExibir == "" || nomeExibir == null || nomeExibir == undefined) {
        submenu.innerHTML += `<a href="../paginas/paginaLogin.html"> ENTRAR </a>`;
    }
    else {
        submenu.innerHTML += `<a> ${nomeExibir} </a>`

        submenu.innerHTML += 
        `
        <ul class="drop-down">
            <li onclick="deslogar()">Sair</li>
            <li onclick="Editar()">Editar</li>
        </ul>
        `;
    }
}

function Editar() {
    window.location.href = "../paginas/paginaEditarUsuario.html";
}

function deslogar() {
    localStorage.removeItem('nome');
    localStorage.removeItem('id');
    window.location.reload(true);
}