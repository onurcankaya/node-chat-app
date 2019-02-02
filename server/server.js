const express = require('express')
const path = require('path')

const publicPath = path.join(__dirname, '../public')
const app = express()
const port = process.env.PORT || 5000

app.use(express.static(publicPath))

app.listen(port, () => {
  console.log(`server is up and running on port ${port}`)
})