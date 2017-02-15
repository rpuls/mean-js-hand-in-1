let http = require('http')
let bl = require('bl')

http.get(process.argv[2],function(response){
    response.setEncoding('utf8')
    response.pipe(bl(function(err,data){
        if(err==null)
        console.log(data.length)
        console.log(data.toString())
    }))
});