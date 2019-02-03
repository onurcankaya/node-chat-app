const express = require('express')
const http = require('http')
const path = require('path')
const socketIO = require('socket.io')

const publicPath = path.join(__dirname, '../public')
const port = process.env.PORT || 5000
const app = express()
app.use(express.static(publicPath))
const server = http.createServer(app)
const io = socketIO(server)

io.on('connection', (socket) => {
  console.log('new user connected')

  socket.on('disconnect', () => {
    console.log('user disconnected')
  })
})

server.listen(port, () => {
  console.log(`server is up and running on port ${port}`)
})
