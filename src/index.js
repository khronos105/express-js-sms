require('dotenv').config();

const app = require('./server')
const http = require('http')

const server = http.createServer(app)

require('./database')
require('./sockets').conn(server)

server.listen('3000', () => {
    console.log('server on port ', app.get('port'))
})