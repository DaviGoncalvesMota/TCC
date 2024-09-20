const idCard = document.getElementById('idCard').value;
const nome = document.getElementById('nomeix');
const local = document.getElementById('local');
const descricao = document.getElementById('descricao');
const imagem = document.getElementById('img');
const linkAchados = document.getElementById('linkAchados');
const linkPerdidos = document.getElementById('linkPerdidos');

window.addEventListener('load', () => {
    const queryString = window.location.search;
    const idCard = queryString.replace("?id=", "");

    fetch(`${baseURL}/api/produtos/${idCard}`, {
        method: 'GET',
        headers: {
            'content-type' : 'application/json'
        }
    }).then(res => res.json()).then(data => {
        if(data.categoria == "Achados"){
            imagem.innerHTML += `<img src="${data.imagem}" class="produtos" id="img" name="imagem" /> `;
            linkAchados.className = 'active';
        }
        if(data.categoria == "Perdidos") {
            linkPerdidos.className = 'active';
        }
        nome.innerHTML = data.nome;
        local.innerHTML = data.local;
        descricao.innerHTML = data.descricao;
    })   
})

