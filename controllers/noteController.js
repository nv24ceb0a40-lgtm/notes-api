const note = require('../models/note')
const getallnotes= async(req,res)=>{
    try{
          const notes= await note.find()
          res.json(notes)
    }
    catch(error)
    {
        console.log('error in getting data from db',error.message)
         res.status(500).json({ message: error.message })
    }

}

module.exports = {getallnotes}