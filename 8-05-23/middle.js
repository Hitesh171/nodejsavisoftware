const express=require("express");
const data=require('./data.js');
const app=express();
app.use(express.json());

const checkQuery=(req,res,next)=>{
    const clg=req.query.college;
    if(!clg){
        return res.json({msg:"please provide college name properly"});
    }
    next();
}
const validate =(req,res,next)=>{
    const name=req.body.name;
    const address=req.body.address;
    const email=req.body.email;
    const phoneNumber=req.body.phoneNumber;
    const DOB=req.body.DOB;
    const phoneNumRegex=/^\d{10}$/;
    const emailRegex=/^\w+\d*@\w+\.\w{2,3}$/;
    if(!name){
        return res.send('name field is empty');
    
    }
    if(!address){
        return res.send('address field is empty');
    }
    if(!DOB){
        return res.send('DOB Ffield is empty ');
    }
    if(!emailRegex.test(email)){
        return res.send('give proper email');
    }
    if(!phoneNumRegex.test(phoneNumber)){
        return res.send('give proper phone number');
    }
    next();

}
app.use("/registeruser",validate);
app.post("/registeruser",(req,res)=>{
    const name=req.body.name;
    const address=req.body.address;
    const email=req.body.email;
    const phoneNumber=req.body.phoneNumber;
    const DOB=req.body.DOB;
    return res.json({msg:"login success",name:name,address:address,email:email,phoneNumber:phoneNumber,DOB:DOB});
})
app.get('/search',checkQuery,(req,res)=>{
    const clg=req.query.college;
    console.log(clg);
    const filteruser=data.filter((user)=>{
        return user.college===clg;

    })
    res.json(filteruser);
});
app.listen(4000,function(){
    console.log("server is running");
})

