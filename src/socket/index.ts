import socketio from "socket.io"

const setUpSocket = (server) => {
    const io = new socketio.Server(server,{
        cors:{
            origin:'*',
            methods:["GET","POST"]
        }
    })

    io.on("connection",(socket)=>{
        console.log(`SOCKET CONNECTED ${socket.id}`)

        socket.on("send_message",(message)=>{
          socket.to(message.room).emit("receive_message",message)
        })

        socket.on("join_room",(roomId)=>{
            socket.join(roomId)
            console.log(`User ${socket.id} Joined Room ${roomId}`)
            console.log(io.sockets.adapter.rooms)
        })



        socket.on("disconnect",()=>{
            console.log(`SOCKET DISCONNECTED ${socket.id}`)
        })
    })
}

export default setUpSocket;