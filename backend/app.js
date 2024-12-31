//Express
const express = require('express')
const app = express()
app.use(express.json())
//Dotenv
const dotenv = require('dotenv')
dotenv.config()
//Mongoose
const mongoose = require('mongoose')
mongoose.connect(process.env.MONGOOSE_LINK)

const User = mongoose.model('User',{
    name: String,
    email: String,
    password: String
})

const port = process.env.PORT


app.get('/', (req, res)=>{
    res.send('Hello world')
})

app.post("/", async (req, res)=>{
    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    })
    await user.save()
    res.send(user)
})

app.listen(port,()=>{
    console.log(`Servidor rodando na porta ${port}`)
})