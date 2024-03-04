const handlebars = require('express-handlebars')

const express = require('express')
let app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true}))

app.engine('handlebars', handlebars.engine({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')


const usuarios = []

//Mostrar lista de usuarios
app.get('/', (req, res) => {
    res.json(usuarios)
})


//Mostrar usuario criado
app.get('/usuarios', (req, res) => {
    res.render('usuarios')    
    console.log(req.body)
})

//Inserir usuario
app.post('/usuarios', (req, res) => {
    res.send("Nome: " + req.body.nome + "\nEmail: " + req.body.email)
    usuarios.push(req.body)
    //res.json({status: 'Usuario criado com sucesso'})
})

//Deletar usuario
app.delete('/usuarios', (req, res) => {
    usuarios.pop(req.body)
    res.json({status: 'Usuario deletado com sucesso'})
})

app.listen(8000, () => {
    console.log('Aplicação rodando em http://localhost:8000')
} )