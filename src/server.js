//Importando os arquivos
const express = require ('express')
const mongoose = require('mongoose')
const path = require('path')
const cors = require('cors')

//Iniciando o app
const app = express()
const server = require('http').Server(app)

//Conexão com o cluster do MongoDB Atlas 
mongoose.connect("mongodb+srv://root:123@senac@cluster0.uijtr.mongodb.net/<dbname>?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

//Habilitando o acesso da API
app.use(cors())

app.use(express.json())

//Socket io
const io = require('socket.io')(server)
app.use((req, res, next) => {
    req.io = io
    
    next()
})

//Imagens estaticas
app.use('/files', express.static(path.join(__dirname, '..', 'uploads', 'resized')))

//Rotas da aplicação
app.use(require('./routes/routes'))

//Porta da aplicação
server.listen(3333)