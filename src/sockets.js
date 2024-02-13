
module.exports = function(io){

    io.on('connection', (socket) =>{                 //tienen todos los ususarios conectados
        console.log('new user connected');

        socket.on('send message', function(data){   //1 solo cliente, 1cliente me envia atraves de send mesage un dato 
            //console.log(data);
            io.sockets.emit('new message', data);    //retransmite a todos, el servidor me va a reenviar nuevamente esos datos a traves de un evento llamado new message
        });
    });
}