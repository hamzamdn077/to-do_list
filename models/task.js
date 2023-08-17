const mongoose=require('mongoose')
const Schema = mongoose.Schema
const Task =new Schema({
    description :{
        type : String,
        required : true
    }
})
module.exports = mongoose.model('Task',Task)