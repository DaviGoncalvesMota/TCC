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
            if(senha === senhaConfirma){
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

let btnSenha = document.querySelector('#btnSenha')
  btnSenha.addEventListener('click', function () {
    let inputSenha = document.querySelector('#inputSenha')
    if (inputSenha.getAttribute('type') == 'password') {
      inputSenha.setAttribute('type', 'text')
    } else {
      inputSenha.setAttribute('type', 'password')
    }
  })