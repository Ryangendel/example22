var express = require("express")
var fs = require("fs")
var app = express()
var bodyParser = require("body-parser")

var PORT = process.env.PORT || 3000

var data= [{name:"Ryan",phone:"555-555-5555", address:"123 main street"},
{name:"jeff",phone:"666666666", address:"1234main street"},
{name:"Eric",phone:"888888888", address:"12345 main street"}]

function jeff(req,res,next){
    // console.log(req)
    next()
}
console.log("------")
console.log(__dirname)
console.log("------")

app.use(jeff)

app.use(bodyParser.json())
app.use(express.static("public"))


function ryan(req,res,next){
    console.log("YOU HIT THE RYAN FUNCITON")
    next()
}



app.get("/", ryan, (req,res)=>{
    res.sendFile(path.join(__dirname,"./public/index.html"))
})

app.get("/signup", (req,res)=>{
    res.send("signup")
})

app.get("/api/userData/:id", (req,res)=>{
    res.send("signup")
})

app.post("/signup", (req,res)=>{
    res.send()
})

app.listen(PORT, ()=>{
    console.log("Listening on port "+ PORT)
})
