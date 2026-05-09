const note=require('../models/note')
const createnote= async (req,res)=>
{
try{
    const title= req.body.title
    const content= req.body.content

    const newnote=new note({title,content})
    await newnote.save()
    res.json(newnote)
}
catch(error)
{
    console.log('error in getting the note',error.message)
    res.status(500).json({ message: error.message })
}
}

module.exports={createnote}