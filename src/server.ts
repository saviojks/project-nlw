import express from 'express'

import './database'
import { routes } from './routes'
const app = express()


app.use(express.json())
app.use(routes)

app.listen(3001,()=>console.log('server runnig import 3000'))