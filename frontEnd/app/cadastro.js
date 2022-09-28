$("#form").submit(function (e) {
    e.preventDefault();
});


function cadastrarProduto() {

    const formData = new FormData(document.querySelector('form'))

    fetch('http://localhost:3001/products', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json; charset=utf-8"
        },
        body: JSON.stringify({
            title: formData.get("title"),
            description: formData.get("description"),
            price: formData.get("price"),
            active: formData.get("active") === "verdadeiro" ? true : false
        })
    }).then(function (res) {
        return res.text();
    }).then(function (text) {
        if(text === "sucesso"){
            $(".alert-danger").addClass('hide');
            $(".alert-success").removeClass('hide');
            setInterval(() => {
                $(".alert").addClass('hide');
            }, 20000)

            $("#form").get(0).reset();
        }
        if(text === "erro"){
            $(".alert-success").addClass('hide');
            $(".alert-danger").removeClass('hide');
            setInterval(() => {
                $(".alert").addClass('hide');
            }, 20000)
        }
    
    }).catch(function (error) {
        $(".alert-success").addClass('hide');
        $(".alert-danger").removeClass('hide');
        setInterval(() => {
            $(".alert").addClass('hide');
        }, 20000)
    })


}