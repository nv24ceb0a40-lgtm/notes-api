const mongoose=require('mongoose');
const connectdb= async ()=>
{   
    try{
            await mongoose.connect(process.env.MONGO_URI);
            console.log('database connection established');
    }
    catch(error)
    {
        console.log('connection failed',error.message);
    }

}


module.exports= connectdb;