//Express
const express = require('express')
const app = express()
app.use(express.json())
//Dotenv
const dotenv = require('dotenv')
dotenv.config()
//Mongoose
const mongoose = require('mongoose')

const port = process.env.PORT


app.get('/', (req, res)=>{
    res.send('Hello world')
})

app.listen(port,()=>{
    console.log(`Servidor rodando na porta ${port}`)
})