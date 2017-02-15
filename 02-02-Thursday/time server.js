var net = require('net')
var server = net.createServer(function (socket) {
    
    let format = function(v){
        if(v<10){
            return "0"+v;
        }else{
            return ""+v;
        }
    }
    
    let date = new Date()
    let year = date.getFullYear()
    let month = format(date.getMonth()+1)
    let day = format(date.getDate())
    let hours = format(date.getHours())
    let minutes = format(date.getMinutes())
    
    socket.write(`${year}-${month}-${day} ${hours}:${minutes}\n`,function(){
        socket.end();
    })
})
server.listen(process.argv[2])