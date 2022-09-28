const http = require('http');
const repository = require('../repositories/product-repository')


exports.get = async(req, res, next)=> {
    const data = await repository.getProduct()
    res.status(200).send(data);

}

exports.post = async(req, res, next) => {
    try{
        await repository.create(req.body)

        const body = JSON.stringify({
            'emailFrom': 'rickteixeira28@gmail.com',
            'emailTo': 'carlosandrade399@gmail.com',
            'subject': 'Têxtil Aarão - Produto Cadastrado',
            'text': 'AVISO: Um produto foi cadastrado no sistema.'
        })
    
        var options = {
            host: 'localhost',
            port: 8080,
            path: '/send-email',
            method: 'POST',
            headers: {
                 'Content-Type': 'application/json'
               }
          } 

        const request = http.request(options, function (response) {
            console.log('Status:', response.statusCode)
        })

        request.write(body)
        request.end()

        res.status(201).send("sucesso")
    }catch(erro){
        res.status(400).send("erro")
    }
}

exports.put = async(req, res, next)=>{
    const id = req.params.id;
    const body = req.body;

    await repository.put(id, body);
    res.status(200).send({message: "atualizado com sucesso"})

}

exports.getById = async(req, res, next) => {
    const id = req.params.id
    const data = await repository.getById(id)
    if(data == null){
        res.status(404).send();
   }
   res.status(200).send(data)
}

exports.delete = async(req, res, next)=>{
    const id = req.params.id

    await repository.delete(id)
    res.status(200).send({message: "removido com sucesso"})
}
