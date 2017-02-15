var map = require('through2-map')
let http = require('http')
let fs = require('fs')

let server = http.createServer(function (request, response) {
    if(request.method !== 'POST'){
        return response.end('i only accept POSTs')
    }
    response.writeHead(200, { 'content-type': 'text/plain' })
    request.pipe(map(function (chunk) {
        return chunk.toString().toUpperCase();
    })).pipe(response)
})
server.listen(process.argv[2])


