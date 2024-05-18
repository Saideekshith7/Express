var express=require('express');
var app=express();
app.use(express.json())

var student=[
    {"id":1,"name":"John","age":30},
    {"id":2,"name":"Jane","age":25},
    {"id":3,"name":"Jack","age":27}

]

app.get('/student/',(req,res)=>{
    res.status(200).json(student);
})


app.post('/student/',(req,res)=>{
    const std=
        {"id":req.body.id,"name":req.body.name,"age":req.body.age}
    ;
    student.push(std);
    res.status(201).json(student);
    })


app.put('/student/:id',(req,res)=>{
    var std=student.find((x)=>x.id== parseInt(req.params.id));
    if(!std){
        res.status(404).send({msg:"Student not found"})
        }
        std.id=req.body.id;
        std.name=req.body.name;
        std.age=req.body.age;
        res.status(200).json(student);
})



app.delete('/student/:id',(req,res)=>{
    var std=student.find((x)=>x.id== parseInt(req.params.id));
    if(!std){
        res.status(404).send({msg:"Student not found"})
        }
    var idx=student.findIndex((x)=>x.id==parseInt(req.params.id));
    console.log(idx);
    student.splice(idx,1);
    res.status(200).json(student);

})

app.listen(3000);




