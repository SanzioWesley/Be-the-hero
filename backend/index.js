const express = require('express')

const app = express()

app.get('/', (request, response) => {
    return response.json({
        evento: 'Semana Oministack',
        aluno: 'Sanzio Wesley'
    })
})

app.listen(3333)