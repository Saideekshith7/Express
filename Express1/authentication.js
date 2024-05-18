const express=require('express')
const app=express()
// npm install jsonwebtoken
const jwt=require('jsonwebtoken')

app.post('/login',(req,res)=>{
    const user={
        uname:'cvr',
        pass:'cvr123'
    }
    jwt.sign({user},"secret_key",{expiresIn:20},(err,token)=>{
        res.status(200).json({token});
    })
});

function verifyToken(req,res,next){
    token=req.headers.authorization.split(' ')[1];
    req.token=token;
    next();
}

app.post('/profile',verifyToken,(req,res)=>{
    jwt.verify((req.token),"secret_key",(err,data)=>{
        if(!err)
        res.status(200).json({messege:"Profile Accessed"})
        else 
        res.status(300).send("Token Mismatch")
    })
})
app.listen(3000);