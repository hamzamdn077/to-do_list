const mongoose=require('mongoose')
const Task = require('../models/task')
module.exports.addTask= (req,res,next)=>{
    const description = req.body.description
    if(!description) return res.status(400).send()
    const task = new Task({
         description 
    });
    task.save().then(()=>{
        console.log("saved")
        res.json({msg :' done'})
    });
}