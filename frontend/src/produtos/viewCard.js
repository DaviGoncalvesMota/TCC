const idCard = document.getElementById('idCard').value;
const nome = document.getElementById('nomeix');
const local = document.getElementById('local');
const descricao = document.getElementById('descricao');

window.addEventListener('load', evento => {
    
    const queryString = window.location.search;
    const idCard = queryString.replace("?id=", "");

    fetch(`${baseURL}/api/produtos/${idCard}`, {
        method: 'GET',
        headers: {
            'content-type' : 'application/json'
        }
    }).then(res => res.json()).then(data => {
        nome.innerHTML = data.nome;
        local.innerHTML = data.local;
        descricao.innerHTML = data.descricao;
    })   
})