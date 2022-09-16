const express = require("express")
const http = require("http")
const socketIO = require("socket.io")

const app = express()
const server = http.createServer(app)
const io = socketIO(server)


io.on("connection", (socket) => {
    console.log("User Connected")
    io.emit("message","hello")


    socket.on("private message", message => {
        socket.emit("chat message", message)
    })

    socket.on("global message", message => {
        socket.emit("chat message", message)
    })

    socket.on("broadcast message", message => {
        socket.emit("chat message", message)
    })

})


app.get("/",(request,response) => {
    response.sendFile(__dirname + "/index.html") // status code : OK
})


server.listen(5000, () => {
    console.log("Server is up and running on port 5000")
})