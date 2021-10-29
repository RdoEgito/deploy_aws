const express = require('express')

const app = express()

app.get('/', (req, res) => {
    return res.json({ message: "Server is up" })
})

app.get('/update', (req, res) => {
    return res.json({ message: "Yeah! It's updated!" })
})

app.post('/teste', (req, res) => {
    const { name, date } = req.body

    return res.json({ name, date })
})

app.listen(3333)