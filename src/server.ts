import * as express from 'express'
import * as bodyParser from 'body-parser'

const app = express()

require('dotenv').config()

app.use(bodyParser.json())

const port = process.env.PORT || 3000

const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`)
})
server.on('error', console.error)
