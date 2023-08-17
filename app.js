const express=require('express')
const mongoose = require('mongoose')
const Task = require('./models/task')
const app =express()
const bodyParser= require('body-parser')
const url='mongodb+srv://hamza:a1a23456789@cluster0.kowm6nx.mongodb.net/todo'
const taskController=require('./controllers/taskController')
app.use(bodyParser.urlencoded({extended : true}))
app.use(express.json())
app.use(express.static('public'))
app.set('view engine','ejs')
app.get('/',(req,res,next)=>{
Task.find().then(tasks=>{
    res.render('home',{tasks})
})
app.get('/delete/:id',(req,res,next)=>{
    Task.findByIdAndRemove(req.params.id).then(result=>{
        res.redirect('/')
    }).catch(err=>{
        console.log(err)
    })
})
app.patch('/',(req,res,next)=>{
    const id = req.body.id
    const {newDescription} = req.body
    Task.findById(id).then(task=>{
      
        task.description=newDescription
        task.save().then(()=>{
            res.status(200).send()
        }).catch(err=>{
            res.status(400).send()
        })
    })
  
})
})
app.post('/',taskController.addTask)



mongoose.connect(url)
app.listen(3000,()=>{
    console.log('listening')
})