const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const colors = require('colors');
const connectDB = require('./config/db');
const path = require('path');


const app = express();
dotenv.config({path:'./config/config.env'});

connectDB();
app.use(express.json());

if(process.env.NODE_ENV !== 'development'){
    app.use(morgan('dev'));
}

const PORT = process.env.PORT || 7000;
const transactions = require('./routes/transactions');
app.get('/', (req,res)=>{
    res.send("hello world!");
})

app.use('/api/v1/transactions',transactions);

if(process.env.NODE_ENV !== 'production'){
 app.use(express.static('client/build'));
 app.get('*', (req,res)=>{
    res.sendFile(path.resolve(__dirname,'client','build','index.html'));
 });
}

app.listen(PORT, ()=>{
    console.log(`Server is running in ${process.env.NODE_ENV} on port ${PORT}`.green);
})
