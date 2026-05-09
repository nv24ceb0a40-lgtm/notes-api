const express=require('express')
const router=express.Router()
const {getallnotes}=require('../controllers/noteController')
router.get('/',getallnotes)
module.exports=router