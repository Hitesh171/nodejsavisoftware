const http=require('http')
function handleRequests(req,res){
    const url=req.url;
    if(url ==='/'){
        res.write('hello user it is home page');
        res.end();
    
    }
    else if(url==='/about'){
        res.write('welcome to about page');
        res.end();
    }
    else {
        res.write('invalid routing page');
        res.end();
    }

}
const server=http.createServer(handleRequests);
server.listen(8000)