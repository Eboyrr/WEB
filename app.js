var express=require('express')
var port=process.env.PORT

var app=express()

app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/index.html')
})

app.listen(port,console.log(port))
