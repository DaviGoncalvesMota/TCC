const form = document.getElementById('form-api');
var loader = document.getElementById("loader");
var content = document.getElementById("content");

content.style.display = "none"

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
    }).then(res => res.json()).then(data => {
      if(data.categoria === "Achados"){
        window.location.href = '../paginas/paginaAchados.html';   
      }  
      else {
        window.location.href = '../paginas/paginaPerdidos.html';
      }
    })    
})

window.addEventListener('load', () => {

    const queryString = window.location.search;
    const id = queryString.replace("?id=", "");

    fetch(`${baseURL}/api/produtos/${id}`, {
        method: 'GET',
        headers: {
            'content-type' : 'application/json'
        }
    }).then(res => res.json()).then(data => {
        document.getElementById('_id').value = data._id;
        document.getElementById('nome').value = data.nome;
        document.getElementById('local').value = data.local;
        document.getElementById('descricao').value = data.descricao;

        loader.style.display = "none",
        content.style.display = "block"
    } 

)    
   
})


