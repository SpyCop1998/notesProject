var express=require('express')
var bodyParser=require('body-parser')
var DB=require('./config/db.config')
DB.connectDB()
var app=express()
app.use(bodyParser.json())
require('./routes/app.routes')(app)

app.listen(3000,()=>{
    console.log(`server is live at 3000`)
})