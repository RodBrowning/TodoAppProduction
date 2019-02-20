const express = require('express')
const cors = require('cors')
const path = require('path')
const app = express()

app.use(cors())
app.use(express.static(path.join(__dirname, 'dist')))
app.set("views", path.join(__dirname, 'dist'))

app.get('/',(req, res) => {
    res.render('index')
})

const PORT = process.env.PORT || 2000
app.listen(PORT)
console.log(`Todos list is open at port: ${PORT}`)