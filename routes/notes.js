const express=require('express')
const router=express.Router()
const {getallnotes}=require('../controllers/noteController')
const {createnote}=require('../controllers/createnote')
router.get('/',getallnotes)
router.post('/',createnote)
module.exports=router