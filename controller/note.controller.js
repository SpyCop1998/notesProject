var Note=require('../model/note.model')

exports.createNote=(req,res)=>{
    if(!req.body.userName){
        return res.send({
            response_code:801,
            response:"User Name is missing"
        })
    }

    if(!req.body.title){
        return res.send({
            response_code:801,
            response:"title is missing"
        })
    }

    if(!req.body.noteContent){
        return res.send({
            response_code:801,
            response:"noteContent is missing"
        })
    }

    var notes=new Note({
        userName:req.body.userName,
        title:req.body.title,
        noteContent:req.body.noteContent
    })

    notes.save().then(data=>{
        res.send({
            response_code:200,
            response:"notes saved successfully"
        })
    }).catch(err=>{
        res.send({
            response_code:800,
            response:"error while saving note in DB"+err.message
        })
    })
}

exports.deleteNote=(req,res)=>{
    if(!req.body.noteId){
        return res.send({
            response_code:801,
            response:"noteId is missing"
        })
    }
    Note.findOneAndDelete({_id:req.body.noteId}).then(data=>{
        if(data){
        res.send({
            response_code:200,
            response:"note deleted"
        })
    }else{
        res.send({
            response_code:801,
            response:"no note found"
        })
    }
    }).catch(err=>{
        res.send({
            response_code:800,
            response:"error while deleting note"+err.message
        })
    })
}

exports.editNote=(req,res)=>{
    if(!req.body.noteId){
        return res.send({
            response_code:801,
            response:"noteId is missing"
        })
    }
    if(!req.body.userName){
        return res.send({
            response_code:801,
            response:"User Name is missing"
        })
    }

    if(!req.body.title){
        return res.send({
            response_code:801,
            response:"title is missing"
        })
    }

    if(!req.body.noteContent){
        return res.send({
            response_code:801,
            response:"noteContent is missing"
        })
    }

    Note.findOneAndUpdate({_id:req.body.noteId},{
        userName:req.body.userName,
        title:req.body.title,
        noteContent:req.body.noteContent
    }).then(data=>{
        if(data){
            res.send({
                response_code:200,
                response:"note edited successfully"
            })
        }else{
            res.send({
                response_code:200,
                response:"note not edited"
            })
        }
    }).catch(err=>{
        res.send({
            response_code:800,
            response:"error while editing note"+err.message
        })
    })
}

exports.searchNote=(req,res)=>{
    if(!req.body.userName){
        return res.send({
            response_code:801,
            response:"User Name is missing"
        })
    }

    if(!req.body.title){
        return res.send({
            response_code:801,
            response:"title is missing"
        })
    }

    Note.findOne({userName:req.body.userName,title:req.body.title}).then(data=>{
        if(data){
            res.send({
                response_code:200,
                response:"note found",
                data:data
            })
        }else{
            res.send({
                response_code:800,
                response:"note not found",
            })
        }
    }).catch(err=>{
        res.send({
            response_code:801,
            response:"error while getting note from DB"+err.message
        })
    })
}

exports.getNote=(req,res)=>{
    if(!req.body.userName){
        return res.send({
            response_code:801,
            response:"User Name is missing"
        })
    }

    Note.find({userName:req.body.userName}).then(data=>{
        res.send({
            response_code:200,
            data:data
        })
    }).catch(err=>{
        res.send({
            response_code:801,
            response:"error while getting note from DB"+err.message
        })
    })
}