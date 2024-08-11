const formAchados = document.getElementById('formAchados');
const formPerdidos = document.getElementById('formPerdidos');
const fileInput = document.getElementById('selecao-arquivo');
const imagem = document.getElementById('imagem');

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
    }).then(res => res.json()).then(() => {
        window.location.href = '../paginas/paginaPerdidos.html';
    })
})

const uploadFile = file => {
    const API_ENDPOINT = `${baseURL}/api/uploadimage`;
    const request = new XMLHttpRequest();
    const formData = new FormData();
  
    request.open("POST", API_ENDPOINT, true);
    request.onreadystatechange = () => {
      if (request.readyState === 4 && request.status === 200) {
        var response = JSON.parse(request.responseText);
        imagem.value = response.file;
        console.log(response.file);
      }
    };
    formData.append("file", file);
    request.send(formData);
};
  
fileInput.addEventListener("change", event => {
    const files = event.target.files;
    uploadFile(files[0]);
});
