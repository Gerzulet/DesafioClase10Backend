import express from 'express'
import handlebars from 'express-handlebars'
import __dirname from './utils.js'
import viewsRouter from './src/routes/user.routes.js'
const app = express()
import {Server} from 'socket.io'


app.use(express.json())
app.use(express.urlencoded({extended:true}))



const httpServer = app.listen(8080)
const socketServer = new Server(httpServer)



console.log(__dirname)
app.engine('handlebars', handlebars.engine())
app.set('views', __dirname + '/src/views/')
app.set('view engine', 'handlebars')
app.use(express.static(__dirname + '+/public'))
app.use('/', viewsRouter)

socketServer.on('connection',(socket) => {
  console.log("Conectado!", socket.id)
  socket.on('message', data => {
    console.log(data)
    socketServer.emit("mensajeRespuesta", data)
  })
socket.on('disconnect', () => {
    console.log(`${socket.id} se ha desconectado!`)
  })
  // socket.emit("eventoParaSocketIndividual", "Mensaje solo para el que puede recibir el socket")
  // socket.broadcast.emit("eventoParaTodoMenosSOcketIndividual", "Esto lo veen todos los socket menos el que envio el mensaje")
  // socketServer.emit("MensajeParaTodos", "Este mensaje lo reciben todos")
})



