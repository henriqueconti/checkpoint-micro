$(document).ready(function () {
    listar()
});

function listar() {
    fetch('http://localhost:3001/products', {
            method: 'GET'
        })
        .then((response) => response.json())
        .then(produtos => exibirProdutos(produtos))
}

exibirProdutos = produtos => {
    tabela = $('#tabela').DataTable({
        data: produtos,
        columns: [{
                data: 'title'
            },
            {
                data: 'description'
            },
            {
                data: 'price'
            },
            {
                data: 'active'
            }
        ],
    })
}