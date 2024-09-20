function alterarSenha() {
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senhaNova').value;
    const senhaConfirma = document.getElementById('senhaConfirma').value;

    fetch(`${baseURL}/api/users/?email=${email}`, {
        method: 'GET',
        headers: {
            'content-type': 'application/json'
        },
    }).then(res => res.json()).then(data => {
        if (data.length == 0) {
            alert('email não existe');
        }
        else {
            var user = data[0];
            if (senha === senhaConfirma) {
                fetch(`${baseURL}/api/users/${user._id}`, {
                    method: 'PUT',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify({
                        senha: senha
                    })
                }).then(res => res.json()).then(() => window.location.href = '../paginas/paginaLogin.html')
            }
            else {
                alert("as senhas não correspondem");
            }
        }
    })
}

function verSenha(id) {
    let senha = document.getElementById(id);
    if (senha.getAttribute('type') == 'password') {
        senha.setAttribute('type', 'text')
    } else {
        senha.setAttribute('type', 'password')
    }
}
