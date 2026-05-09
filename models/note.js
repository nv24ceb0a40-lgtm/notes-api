const mongoose=require('mongoose')
const noteschema=new mongoose.Schema({

    title:{
    type:String,
    required:true
    },
    content:{
        type:String,
        required:false
    }
 
},{timestamps:true})

const note=mongoose.model('note',noteschema);
module.exports=note