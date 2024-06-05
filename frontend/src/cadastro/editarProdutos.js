const form = document.getElementById('form-api');

form.addEventListener('submit', evento => {
    evento.preventDefault(); 

    const formData = new FormData(form);
    const data = Object.fromEntries(formData);

    const id = document.getElementById('_id').value;

    fetch(`${baseURL}/api/produtos/${id}`, {
        method: 'PUT',
        headers: {
            'content-type' : 'application/json'
        },
        body: JSON.stringify(data)
    }).then(res => res.json()).then(data =>  window.location.href = '../principal/telaAchados.html')    
})

window.addEventListener('load', evento => {
    const queryString = window.location.search;
    const id = queryString.replace("?id=", "");

    fetch(`${baseURL}/api/produtos/${id}`, {
        method: 'GET',
        headers: {
            'content-type' : 'application/json'
        }
    }).then(res => res.json()).then(data => {
        document.getElementById('_id').value = data._id;
        document.getElementById('telefone').value = data.telefone;
        document.getElementById('ondeEncontrar').value = data.ondeEncontrar;
        document.getElementById('descricao').value = data.descricao;
    } )    
   
})


