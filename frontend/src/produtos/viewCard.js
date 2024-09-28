const idUser = localStorage.getItem('id');
const idCard = document.getElementById('idCard').value;
const nome = document.getElementById('nomeix');
const local = document.getElementById('local');
const descricao = document.getElementById('descricao');
const imagem = document.getElementById('img');
const linkAchados = document.getElementById('linkAchados');
const linkPerdidos = document.getElementById('linkPerdidos');
const linkEntregues = document.getElementById('linkEntregues');
const entregueBotao = document.getElementById('entrega');

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
            imagem.innerHTML += `<img src="${data.imagemPrincipal}" class="produtos" id="img" /> `;
            linkAchados.className = 'active';
        }
        if(data.categoria == "Perdidos") {
            linkPerdidos.className = 'active';
        }
        if(data.categoria == "Entregue" && idUser == secretaria){
            imagem.innerHTML += `<img src="${data.imagemEntrega}" class="produtos" id="img" /> `;
            linkEntregues.className = 'active'
        }
        if(data.categoria == "Entregue" && idUser != secretaria){
            imagem.innerHTML += `<img src="${data.imagemPrincipal}" class="produtos" id="img" />`;
            linkEntregues.className = 'active';
        }

        nome.innerHTML = data.nome;
        local.innerHTML = data.local;
        descricao.innerHTML = data.descricao;

        if(idUser == secretaria && data.categoria == "Achados"){
            entregueBotao.innerHTML +=
            `
                <a style="color: white;" href="../paginas/paginaConfirmaEntrega.html?id=${idCard}"><div class="btn mt-4"> Entregar  </a>
            `
        }
    })   
})

