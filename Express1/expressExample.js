var express=require("express")
var app=express()
let emp=[
    {"id":1,"name":"abc","rollno":12},
    {"id":2,"name":"def","rollno":13},
    {"id":3,"name":"ghi","rollno":14}
]
app.get('/',function(req,res){
    res.send('This is a home page');
    });

app.get('/contacts',function(req,res){
    res.send('This is a contacts page');
});
app.get('/error',function(req,res){
    res.status(404).send('This is an error page');
});
app.get('/employees',function(req,res){
    res.json(emp);
    });

app.listen(3000);