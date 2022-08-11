const express = require("express")

const server = express()

server.use(express.json())

server.get("/", (req, res) => {
    res.send('Hello world!')
})

server.post("/", (req, res) => {
    res.json(req.body)
})

server.get("/jabberwocky", (req, res) => {
    res.send(`
    <h1>Jabberwocky</h1>
    <p>${process.env.JABBERWOCKY}</p>
    `)
})

module.exports = server;