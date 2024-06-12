async function deletar(id, evento) {
    let confirmar = window.confirm('deseja deletar??')

    if (confirmar == true) {
        await fetch(`${baseURL}/api/produtos/${id}`, {
            method: 'DELETE'
        });
        window.location.reload(true)
    }
}