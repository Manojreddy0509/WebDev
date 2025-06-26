const express = require('express')
const app = express()
const port = 3000
const fs = require("fs")

// app.use(express.static("public"))

app.use((req, res, next) => {
    console.log(req.headers)
    req.harry = "I am harry bhai";
    fs.appendFileSync("logs.txt", `${Date.now()} is a ${req.method}\n`)
    console.log(`${Date.now()} is a ${req.method}`)
    // res.send("Hacked by Middlware 1")
    next()
})

app.use((req, res, next) => {
    console.log('m1')
    next()
})

app.use((req, res, next) => {
    console.log('m2')
    next()
})

app.get('/', (req, res) => {
  res.send('Hello Home!')
})

app.get('/about', (req, res) => {
  res.send('Hello about!')
})

app.get('/contact', (req, res) => {
  res.send('Hello contact!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
