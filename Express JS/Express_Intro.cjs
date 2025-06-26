// const http = require('node:http');
// const hostname = '127.0.0.1';
// const port = 3000;
// const server = http.createServer((_req, res) => {
//     res.statusCode = 200;
//     res.setHeader('Content-Type', 'text/plain');
//     res.end('HI pandu \n'); });
// server.listen(port, hostname, () => {
//     console.log(`Server running at http://${hostname}:${port}/`); });

// npm i --global nodemon
// npm init -y
// nodemon V88_Express.cjs


const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'))

app.get('/', (req, res) => {
  res.send('sanjay!')
})
app.get('/about', (req, res) => {
  res.send('about us!')
})
app.get('/contact', (req, res) => {
  res.send('contact us!')
})
app.get('/contact/:slug', (req, res) => {
  res.send(`contact us! ${req.params.slug}`);
});
app.get('/contact/:slug/:second', (req, res) => {
  res.send(`contact us! ${req.params.slug} and ${req.params.second}`);
  console.log(req.params)  //[Object: null prototype] { slug: 'js', second: 'python' }
  console.log(req.query)   //[Object: null prototype] { mode: 'light' }
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

