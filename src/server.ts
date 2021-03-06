import express from 'express'
import { createServer } from 'http'
import { Socket,Server } from 'socket.io'
import path from 'path'
import './database'
import { routes } from './routes'

const app = express()

app.use(express.static(path.join(__dirname, '..','public')))
app.set('views', path.join(__dirname,'..','public'))
app.engine('html', require('ejs').renderFile)
app.set('view engine', 'html')

app.get('/pages/client',(request, response)=>{
    return response.render('html/client.html')
})

const http = createServer(app)

const io= new Server(http)

io.on('connection',(socket:Socket) => {
    console.log('NEW socket conected=>>', socket.id)
    
})

app.use(express.json())
app.use(routes)

http.listen(3001,()=>console.log('server runnig import 3000'))