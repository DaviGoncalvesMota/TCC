const form = document.getElementById('form-api');

form.addEventListener('submit', evento => {
    evento.preventDefault(); 

    const formData = new FormData(form);
    const data = Object.fromEntries(formData);

    fetch('http://localhost:3003/api/produtos', {
        method: 'POST',
        headers: {
            'content-type' : 'application/json'
        },
        body: JSON.stringify(data)
    }).then(res => res.json()).then(data => console.log(data))
})

