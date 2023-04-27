const express = require("express")
const router = express.Router()

const app = express()
const porta = 3333 

const mulheres = [
    {
        nome: 'Simara Conceição',
        imagem: 'https://github.com/simaraconceicao.png',
        minibio: 'Desenvolvedora e Instrutora'
    },
    {
        nome: 'Iana Chan',
        imagem: 'https://media.licdn.com/dms/image/C4D03AQE-aD7nj2W_0Q/profile-displayphoto-shrink_800_800/0/1563383651406?e=1687996800&v=beta&t=f2NCre8pRfROBebkmW8CzzRKqwAHXygFHqMVwAk5bfs',
        minibio: 'Fundadora da PrograMaria'
    },
    {
        nome: 'Nina da Hora',
        imagem: '',
        minibio: 'Hacker antirracista'
    }
]

function mostraMulheres(request, response) {
    response.json(mulheres)
}
function mostraPorta() {
    console.log("Servidor criado e rodando na porta ", porta)
}

app.use(router.get('/mulheres', mostraMulheres))
app.listen(porta, mostraPorta)