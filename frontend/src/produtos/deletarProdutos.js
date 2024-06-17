async function deletar(id) {
    let confirmar = window.confirm('deseja deletar??')

    if (confirmar == true) {
        await fetch(`${baseURL}/api/produtos/${id}`, {
            method: 'DELETE'
        });
        window.location.reload(true)
    }
}