const form = document.getElementById('form-api');

const toBase64 = file => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = reject;
}); 

async function salvar(data, file) {
    var imgBase64 = await toBase64(file);

    data = {...data, 
        imagem: {
            data: imgBase64,
            contentType: file.type
        }
    }

    fetch(`${baseURL}/api/produtos`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(data)
    }).then(res => res.json()).then(data => {
        if(data.categoria === "Achados"){
            window.location.href = '../paginas/paginaAchados.html';
        }
        else {
            window.location.href = '../paginas/paginaPerdidos.html';
        }
    })    
 }
 

form.addEventListener('submit', evento => {
    evento.preventDefault();

    const formData = new FormData(form);
    let data = Object.fromEntries(formData);

    var img = document.getElementById('img');
    var file = img.files[0];

    salvar(data, file);
})