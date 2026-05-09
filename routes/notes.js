const express=require('express')
const router=express.Router()
const {getallnotes}=require('../controllers/noteController')
const {createnote,deletenote}=require('../controllers/createnote')
router.get('/',getallnotes)
router.post('/',createnote)
router.delete('/:id',deletenote)
module.exports=router