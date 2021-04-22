var mongoose=require('mongoose')
exports.connectDB = ()=>{
    url="mongodb://localhost:27017/sandeep_saroj"
    mongoose.connect(url,{
        useNewUrlParser: true
    },(err,db)=>{
        if(err){
            console.log("Error while connneting to db"+err.message)
        }else{
            console.log('DB connected')
        }
    })
}