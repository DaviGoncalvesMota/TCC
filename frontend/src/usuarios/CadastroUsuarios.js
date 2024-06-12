const form = document.getElementById('form');

form.addEventListener('submit', evento => {
    evento.preventDefault(); 

    const formData = new FormData(form);
    const data = Object.fromEntries(formData);

    fetch(`${baseURL}/api/users`, {
        method: 'POST',
        headers: {
            'content-type' : 'application/json'
        },
        body: JSON.stringify(data)
    }).then(res => res.json()).then(data => {
        if(data.nome > "" && data.email > "" && data.senha > ""){
            localStorage.setItem('nome', data.nome);
            localStorage.setItem('id', data._id);
            window.location.href = '../paginas/paginaPrincipal.html';
        }
        else {
            alert("Erro ao cadastrar");
        }
    })
})


//window.location.href = '../paginas/paginaPrincipal.html'