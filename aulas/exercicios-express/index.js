const express = require('express')
const app = express()

app.use('/opa', (req, res) => {
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