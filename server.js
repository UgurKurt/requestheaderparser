var express = require("express");
var app = express();

app.get('/',function(req,res){
    var sendMe = { ip:req.headers['x-forwarded-for'] , language:req.headers['accept-language'] ,system:req.headers['user-agent']};
    res.end(JSON.stringify(sendMe));
});


app.listen(8080,function(){
    console.log("Server has started!");
});