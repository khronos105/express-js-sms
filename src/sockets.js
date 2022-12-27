const socketIO = require('socket.io')

let socket

const conn = server => {
    const io = socketIO(server)

    io.on('connection', newSocket => {
        socket = newSocket
        console.log(newSocket.id)
    })
}

const getSocket = () => socket

module.exports = { conn, getSocket }