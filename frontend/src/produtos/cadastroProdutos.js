const formAchados = document.getElementById('formAchados');
const formPerdidos = document.getElementById('formPerdidos');

function selecionar() {

    const categoriaSelecao = document.getElementById('categoria').value;

    if (categoriaSelecao === 'Achados') {
        formAchados.style.display = 'block';
        formPerdidos.style.display = 'none';
    } else if (categoriaSelecao === 'Perdidos') {
        formPerdidos.style.display = 'block';
        formAchados.style.display = 'none';
    } else {
        formAchados.style.display = 'none';
        formPerdidos.style.display = 'none';
    }
}


formAchados.addEventListener('submit', evento => {
    evento.preventDefault();
    const categoriaSelecao = document.getElementById('categoria').value;

    const formData = new FormData(formAchados);
    let data = Object.fromEntries(formData);

    data = {
        ...data,
        categoria: categoriaSelecao
    }

    fetch(`${baseURL}/api/produtos`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(data)
    }).then(res => res.json()).then(data => {
        window.location.href = '../paginas/paginaAchados.html';
    })
})

formPerdidos.addEventListener('submit', evento => {
    evento.preventDefault();
    const categoriaSelecao = document.getElementById('categoria').value;

    const formData = new FormData(formPerdidos);
    let data = Object.fromEntries(formData);

    data = {
        ...data,
        categoria: categoriaSelecao
    }

    fetch(`${baseURL}/api/produtos`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(data)
    }).then(res => res.json()).then(data => {
        window.location.href = '../paginas/paginaPerdidos.html';
    })
})
