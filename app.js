const express = require('express')

const app = express()

app.get('/me', (request, response) => {
    response.status(200).json({
        name: 'Nilson',
        age: 21,
        country: 'Dominican Republic',
        verb: request.method
    })
})
app.post('/metas', (request, response) => {
    response.status(200).json({
        hobbies:'musica, escribir, programar',
        verb: request.method
    })
})
app.patch('/metas', (request, response) => {
    response.status(200).json({
        meta1:'conseguir un trabajo como programador',
        meta2: 'tener un buen sueldo',
        verb: request.method
    })
})
app.put('/business', (request, response) => {
    response.status(200).json({
        empresas:'Globant, Google, Amazon',
        verb: request.method
    })
})

app.listen(9000, ()=>{
    console.log('si');
})