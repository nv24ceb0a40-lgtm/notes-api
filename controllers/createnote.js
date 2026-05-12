const note=require('../models/note')
const deletenote=async (req,res)=>{
    try{
        const id=req.params.id
      await  note.findByIdAndDelete(id)
        res.json({message: 'suscessfully deleted the note'})
    }
    catch(error)
    {
        console.log('error in deleting',error.message)
        res.status(500)
    }
}
const createnote= async (req,res)=>
{
try{
    const title= req.body.title
    const content= req.body.content

    const newnote=new note({title,content})
    await newnote.save()
    res.json(newnote)
   // console.log(newnote)
}
catch(error)
{
    console.log('error in getting the note',error.message)
    res.status(500).json({ message: error.message })
}
}


module.exports={createnote,deletenote}