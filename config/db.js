const mongoose = require('mongoose');

const mongoURI = 'mongodb://localhost:27017/expensetracker'
const connectDB= async()=>{
    try{
        const conn = await mongoose.connect(mongoURI);
        console.log(`connected successfully: ${conn.connection.host}`.cyan.underline.bold);
   }
    catch(err){
        console.log(`error connecting: ${err.message}`);
        process.exit(1);
    }
}
module.exports=connectDB;