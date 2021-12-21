const http = require('http')

const port = 5000

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.end('Home Page')
  } else if (req.url === '/about') {
    // BLOCKING CODE !!!
    for (let i = 0; i < 1000; i++) {
      for (let j = 0; j < 1000; j++) {
        console.log(`${i} ${j}`)
      }
    }
    res.end('About Page')
  } else {
    res.end('Error Page')
  }
})

server.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`)
})
