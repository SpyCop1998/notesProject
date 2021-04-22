var User=require('../model/user.model')
exports.createUser=(req,res)=>{
    if(!req.body.userName){
        return res.send({
            response_code:801,
            response:"User Name is missing"
        })
    }

    if(!req.body.password){
        return res.send({
            response_code:801,
            response:"password is missing"
        })
    }

    var user=new User({
        userName:req.body.userName,
        password:req.body.password
    })

    user.save().then(data=>{
        res.send({
            response_code:200,
            response:"user created successfully"
        })

    }).catch(err=>{
        res.send({
            response_code:800,
            response:"error while saving user in DB"+err.message
        })
    })
}

exports.loginUser=(req,res)=>{
    if(!req.body.userName){
        return res.send({
            response_code:801,
            response:"User Name is missing"
        })
    }

    if(!req.body.password){
        return res.send({
            response_code:801,
            response:"password is missing"
        })
    }

   User.findOne({userName:req.body.userName,password:req.body.password}).then(user=>{

    if(user){
        res.send({
            response_code:200,
            response:"login successfull",
            data:user
           })
    }else{
        res.send({
            response_code:800,
            response:"No user found"
           })
    }

   }).catch(err=>{
       res.send({
        response_code:801,
        response:"Error while geting user from DB"
       })
   })
}