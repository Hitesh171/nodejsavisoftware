const express=require('express');
const data=require('./data');
const app=express();


app.post('/users',(req,res)=>{
    const name=req.data.name;
    const college=req.data.college;

    return res.json(name,college);
});

app.listen(8000,()=>{
    console.log('successful run')
});