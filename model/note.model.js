var mongoose=require('mongoose')
var CollectionName="Notes"
var noteSchema=mongoose.Schema({
    userName:{
        type:String,
        require:true
    },
    title:{
        type:String,
        require:true
    },
    noteContent:{
        type:String,
        require:true
    }
})
module.exports=mongoose.model(CollectionName,noteSchema)