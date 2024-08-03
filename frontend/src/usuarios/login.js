const formLogin = document.getElementById('formLogin');

formLogin.addEventListener('submit', evento => {
    evento.preventDefault();

    const email = document.getElementById('emailLogin').value;
    const senha = document.getElementById('senhaLogin').value;

    fetch(`${baseURL}/api/users/?email=${email}`, {
        method: 'GET',
        headers: {
            'content-type': 'application/json'
        }
    }).then(res => res.json()).then(data => {
        if (data.length == 0) {
            alert("Usuário ou senha inválido.");
            return;
        }
        var usuario = data[0];
        if (usuario.senha == senha) {
            localStorage.setItem('nome', usuario.nome);
            localStorage.setItem('id', usuario._id);
            window.location.href = "../paginas/paginaPrincipal.html"
        } else {
            alert("Usuário ou senha inválido.");
        }
    })

})





