require('dotenv').config();
const express=require('express');
const connectdb=require('./config/db')
const app=express();
const router=require('./routes/notes')
connectdb();
app.use('/notes',router)
app.get('/',(req,res)=>
{
    res.send('hello there')
})
app.listen(5000,()=>
{
    console.log('server is running on port 5000');

})

