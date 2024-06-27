const form = document.getElementById('form-api');

form.addEventListener('submit', evento => {
    evento.preventDefault();

    let userName = localStorage.getItem('nome');
    let userId = localStorage.getItem('id');

    document.getElementById('userName').value = userName;
    document.getElementById('userId').value = userId;

    const formData = new FormData(form);
    const data = Object.fromEntries(formData);

    console.log(data);

    fetch(`${baseURL}/api/produtos`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(data)
    }).then(res => res.json()).then(data => {
        console.log(data);
        return;
        if(data.ondeEncontrar === "Secretaria"){
            window.location.href = '../paginas/paginaAchados.html';
        }
        else {
            window.location.href = '../paginas/paginaPerdidos.html';
        }
    })
})