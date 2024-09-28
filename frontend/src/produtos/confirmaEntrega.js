const form = document.getElementById('formEntrega');
const imgText = document.getElementById('imgSubir');
const fileInput = document.getElementById('selecao-arquivo');
const btnEntrega = document.getElementById('btnEntrega');
const imagemUpload = document.getElementById('imagem');
let id = localStorage.getItem('id');

if (imagemUpload.value == "") {
    btnEntrega.disabled = true
}

window.addEventListener('load', () => {
    const queryString = window.location.search;
    const idCard = queryString.replace("?id=", "");

    fetch(`${baseURL}/api/produtos/${idCard}`, {
        method: 'GET',
        headers: {
            'content-type' : 'application/json'
        }
    }).then(res => res.json()).then(data =>
        document.getElementById('idEntrega').value = data._id
    )
})

form.addEventListener('submit', evento => {
    evento.preventDefault()

    const idEntrega = document.getElementById('idEntrega').value;
    let imagemEntrega = document.getElementById('imagem').value;

    fetch(`${baseURL}/api/produtos/${idEntrega}`, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({ categoria: "Entregue", imagemEntrega: imagemEntrega})
    }).then(res => res.json()).then(() => {
        window.location.href = '../paginas/paginaEntregues.html';
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
            imagemUpload.value = response.file;
            if (imagemUpload.value > "") {
                btnEntrega.disabled = false
            }
            imgText.innerHTML +=
                `
            <p> a imagem está pronta!! </p>
                `
        }
    };
    formData.append("file", file);
    request.send(formData);
};

fileInput.addEventListener("change", event => {
    const files = event.target.files;
    uploadFile(files[0]);
});