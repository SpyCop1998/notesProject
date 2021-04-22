var mongoose=require('mongoose')
var CollectionName='User'
var userSchema=mongoose.Schema({
    userName:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    }
})
module.exports=mongoose.model(CollectionName,userSchema)