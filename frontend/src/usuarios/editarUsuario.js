const form = document.getElementById('form-editar');
var loader = document.getElementById("loader");
var content = document.getElementById("content");

content.style.display = "none"

form.addEventListener('submit', evento => {
    evento.preventDefault();

    const id = localStorage.getItem('id');

    const formData = new FormData(form);
    const data = Object.fromEntries(formData);

    fetch(`${baseURL}/api/users/${id}`, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(data)
    }).then(res => res.json()).then(data => {
        if (data.nome > "" || data.email > "" || data.senha > "") {
            localStorage.setItem('nome', data.nome);
            localStorage.setItem('id', data._id);
            window.location.href = "../paginas/paginaAchados.html";
        }
        else {
            alert("Preencha os campos");
        }
    })
},

    window.addEventListener('load', () => {
        
        const id = localStorage.getItem('id');
        fetch(`${baseURL}/api/users/${id}`, {
            method: 'GET',
            headers: {
                'content-type': 'application/json'
            }
        }).then(res => res.json()).then(data => {
            document.getElementById('nome').value = data.nome;
            document.getElementById('email').value = data.email;
            document.getElementById('senhaEditar').value = data.senha;

            loader.style.display = "none",
            content.style.display = "block"
            
        })
    }))