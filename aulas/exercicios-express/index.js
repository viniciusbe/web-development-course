const express = require('express')
const app = express()
const bodyParser = require('body-parser')

const saudacao = require('./saudacaoMid')
const usuarioApi = require('./api/usuario')
const produtoApi = require('./api/produto')

produtoApi(app,'com param!')


app.post('/usuario', usuarioApi.salvar)
app.get('/usuario', usuarioApi.obter)

app.use(express.text())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use(saudacao('Guilherme'))


app.get('/clientes/relatorio', (req, res) => {
    res.send(`Cliente relatorio: completo ${req.query.completo} ano = ${req.query.ano}`)
})

app.post('/corpo', (req, res) => {
    // let corpo = ''
    // req.on('data', function (parte) {
    //     corpo += parte
    // })

    // req.on('end', function () {
    //     res.send(corpo)
    // })
    res.send(req.body)
})


app.get('/clientes/:id', (req, res) => {
    res.send(`Cliente ${req.params.id} selecionado!`)
})


app.use('/opa', (req, res, next) => {
    console.log('Serase serei chamado?')
    next()
})

app.get('/opa', (req, res) => {
    res.json([
        { id: 7, name: 'Ana', position: 1 },
        { id: 34, name: 'Bia', position: 2 },
        { id: 72, name: 'Carlos', position: 3 }
    ])

    // res.json({
    //     name:'iPad 64gb',
    //     price:1899.00,
    //     discount:0.12
    // })

    // res.send('<h1>Estou bem!</h1>')
})




app.listen(3000, () => {
    console.log("Backend rodando...")
})