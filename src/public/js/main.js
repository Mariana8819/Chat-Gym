//console.log('chat ira aqui');
$(function(){
    // alert('works!')
    const socket = io();

    //obtaining DOM elements from the interface
    const $messageForm = $('#message-form');
    const $messageBox = $('#message');
    const $chat = $('#chat');                //es el cuerpo de los mensajes en el form

    //events
    $messageForm.submit( e => {
        e.preventDefault();
        // console.log($messageBox.val());
        socket.emit('send message', $messageBox.val());
        $messageBox.val('');
    });

    socket.on('new message', function(data){  //es el e q me envia el servidor los recibe y los muestre en el cuerpo
      $chat.append(data + '<br/>');
    })
})

