var mymodule = require('./mymodule.js')

mymodule(process.argv[2], process.argv[3], function(err, data){
    if(err==null){
        data.forEach(function(f){
            console.log(f);
        })
    }
})