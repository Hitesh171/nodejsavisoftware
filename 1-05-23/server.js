var http=require("http");
var server=http.createServer(function(req,res){
res.end("kem cho mza ma?");
})
server.listen(5000);
console.log("working fine");