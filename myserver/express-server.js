const express=require('express');
const app=express();

app.get('/',(req,res)=>{
    res.send('this is express server home page');
});
app.get('/about',(req,res)=>{
    res.send('about page');
});
app.get('/info',(req,res)=>{
    res.send('info page');
})
app.listen(8000,()=>console.log('server run successful'));