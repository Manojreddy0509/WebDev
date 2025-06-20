
// npm init -y
// npm i express@5
// npm i --global nodemon
// nodemon V89_RRR_Express.js

const express = require('express')
const app = express()
const port = 3000

app.use(express.static("public"))

// GET REQUEST

// app.get('/', (req, res) => {
//   res.send('Hello World get!')})

//POST REQUEST

app.post('/', (req, res) => {
  console.log("Hey its a post request")
  res.send('Hello World post!')})

//PUT REQUEST

// app.put('/', (req, res) => {
//     console.log("Hey its a put request")
//     res.send('Hello World put!')
// })

//html rendering
// app.get('/index', (req, res) => {
//     console.log("Hey its a html file")
//     res.send('Hello World index!')
// })

//html file rendering
// app.get('/index', (req, res) => {
//     console.log("Hey its a html file")
//     res.sendFile('templates/index.html',{root:__dirname})
// })

 //sending api json 
 app.get('/api', (req, res) => {
    res.json({a:1,b:2})
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })
