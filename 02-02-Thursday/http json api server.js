var map = require('through2-map')
let http = require('http')
let fs = require('fs')
let url = require('url')

let server = http.createServer(function (request, response) {
    if(request.method !== 'GET'){
        return response.end('i only accept GETs')
    }
    response.writeHead(200, { 'content-type': 'application/json' })
    let urlp = url.parse(request.url, true)
    let date = new Date(urlp.query.iso)
    var jsonTime = {}
    if(urlp.pathname=='/api/parsetime'){
        jsonTime.hour = date.getHours()
        jsonTime.minute = date.getMinutes()
        jsonTime.second = date.getSeconds()
    }else if(urlp.pathname=='/api/unixtime'){
        jsonTime.unixtime = date.getTime();
    }
    response.end(JSON.stringify(jsonTime))
})
server.listen(process.argv[2])
