const express=require('express');
const bodyParser=require('body-parser');
const data=require('./data');
const app=express();
app.use(bodyParser.urlencoded({
    extended:true
}));

app.use(express.json());

app.get("/",function(req,res){
    res.sendFile(__dirname +"/index.html");
});
app.post("/",function(req,res){
    var num1=Number(req.body.num1);
    var num2=Number(req.body.num2);
    console.log(num1, num2);
    var result=num1+num2;
    res.send("addition-"+result);
});
app.get('/users',(req,res)=>{
    res.json(data);
});
app.get('/users/:id',(req,res)=>{
    const id=req.params.id;
    const user=data.find(user=>user.id===Number(id));
    if(!user){
        return res.json({msg:"user is not avaliable"});
    }
    return res.json(user);
});

app.listen(5000,()=>{
    console.log('successful run')
});