function alterarSenha() {
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;
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
                }).then(res => res.json()).then(data => window.location.href = '../paginas/paginaLogin.html')
            }
            else {
                alert("as senhas não correspondem");
            }
        }
    })
}

function verSenhaLogin() {
    let senhaLogin = document.getElementById('senhaLogin');
    if (senhaLogin.getAttribute('type') == 'password') {
        senhaLogin.setAttribute('type', 'text')
    } else {
        senhaLogin.setAttribute('type', 'password')
    }
}

function verSenhaCadastro() {
    let senhaCadastro = document.getElementById('senhaCadastro');
    if (senhaCadastro.getAttribute('type') == 'password') {
        senhaCadastro.setAttribute('type', 'text')
    } else {
        senhaCadastro.setAttribute('type', 'password')
    }
}

function verSenhaEditar() {
    let senhaEditar = document.getElementById('senhaEditar');
    if (senhaEditar.getAttribute('type') == 'password') {
        senhaEditar.setAttribute('type', 'text')
    } else {
        senhaEditar.setAttribute('type', 'password')
    }
}

function verSenhaNova() {
    let senhaNova = document.getElementById('senhaNova');
    if (senhaNova.getAttribute('type') == 'password') {
        senhaNova.setAttribute('type', 'text')
    } else {
        senhaNova.setAttribute('type', 'password')
    }
}

function verSenhaConfirma(){
    let senhaConfirma = document.getElementById('senhaConfirma');
    if (senhaConfirma.getAttribute('type') == 'password') {
        senhaConfirma.setAttribute('type', 'text')
    } else {
        senhaConfirma.setAttribute('type', 'password')
    }
}









// let btnSenha = document.querySelector('#btnSenha')
//   btnSenha.addEventListener('click', function () {
// let inputSenha = document.querySelector('#inputSenha')
// if (inputSenha.getAttribute('type') == 'password') {
//   inputSenha.setAttribute('type', 'text')
// } else {
//   inputSenha.setAttribute('type', 'password')
// }
//   })

