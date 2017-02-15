let http = require('http')
let bl = require('bl')

var req1 = ""
var req2 = ""
var req3 = ""
var count = 0

let geturl = function (argNo,set) {
    http.get(process.argv[argNo], function (response) {
        response.setEncoding('utf8')
        response.pipe(bl(function (err, data) {
            if (err == null)
                set(data.toString())
                count +=1
                if(count==3){
                    console.log(req1)
                    console.log(req2)
                    console.log(req3)
                }
        }))
    })
}

geturl(2,function(s){
    req1 = s;
})

geturl(3,function(s){
    req2 = s;
})

geturl(4,function(s){
    req3 = s;
})