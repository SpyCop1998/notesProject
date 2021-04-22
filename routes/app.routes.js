module.exports=(app)=>{
    app.get('/',(req,res)=>{
        res.send({
            message:"server is live at 3000"
        })
    })
    
    var User=require('../controller/user.controller')
    app.post('/signUp',User.createUser)//for signup
    app.post('/logIn',User.loginUser)//for login

    var Note=require('../controller/note.controller')
    app.post('/createNote',Note.createNote)//for create notes
    app.post('/deleteNote',Note.deleteNote)//for delte note
    app.post('/editNote',Note.editNote)//for edit notes
    app.post('/searchNote',Note.searchNote)//for searching note
    app.post('/getNote',Note.getNote)//for geting notes 
}