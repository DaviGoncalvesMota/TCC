const id = document.getElementById('id').value;
const nome = document.getElementById('nome');
const local = document.getElementById('local');
const telefone = document.getElementById('telefone');
const ondeEncontrar = document.getElementById('ondeEncontrar');
const descricao = document.getElementById('descricao');

window.addEventListener('load', evento => {
    
    const queryString = window.location.search;
    const id = queryString.replace("?id=", "");

    fetch(`${baseURL}/api/produtos/${id}`, {
        method: 'GET',
        headers: {
            'content-type' : 'application/json'
        }
    }).then(res => res.json()).then(data => {
        nome.innerHTML = data.nome;
        local.innerHTML = data.local;
        telefone.innerHTML = data.telefone;
        ondeEncontrar.innerHTML = data.ondeEncontrar;
        descricao.innerHTML = data.descricao;
    })   
})