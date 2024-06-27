const form = document.getElementById('form');


form.addEventListener('submit', evento => {
    evento.preventDefault();
  
    const email = document.getElementById('emailCadastro').value;
    
    const formData = new FormData(form);
    const dataRegistro = Object.fromEntries(formData);

    fetch(`${baseURL}/api/users/?email=${email}`, {
        method: 'GET',
        headers: {
            'content-type': 'application/json'
        },
    }).then(res => res.json()).then(data => {
        if (data.length > 0) {
            alert("email já registrado");
        }
        else {
            fetch(`${baseURL}/api/users`, {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(dataRegistro)
            }).then(res => res.json()).then(data => {
                if (data.nome > "" && data.email > "" && data.senha > "") {
                    localStorage.setItem('nome', data.nome);
                    localStorage.setItem('id', data._id);
                    window.location.href = '../paginas/paginaPrincipal.html';
                }
                else {
                    alert("Erro ao cadastrar");
                }
            })
        }
    })
})