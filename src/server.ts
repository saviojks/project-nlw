import express from 'express'

import './database'

const app = express()


app.get('/', (req, res) => {
    return res.json( {OK: "HOLOR"})
})

app.listen(3333,()=>console.log('server runnig import 3000'))