let http = require('http')
let fs = require('fs')


let server = http.createServer(function (reqest,response) {
    response.writeHead(200, { 'content-type':'text/plain' })
    let content = fs.createReadStream(process.argv[3],'utf8');
    content.pipe(response);  
})
server.listen(process.argv[2])