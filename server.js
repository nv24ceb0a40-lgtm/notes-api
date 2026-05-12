require('dotenv').config();
const express=require('express');
const connectdb=require('./config/db')
const app=express();
const cors=require('cors')
const router=require('./routes/notes')
connectdb();
app.use(express.json())
app.use(cors())
app.use('/notes',router)
app.get('/',(req,res)=>
{
    res.send('hello there')
})
app.listen(5000,()=>
{
    console.log('server is running on port 5000');

})

