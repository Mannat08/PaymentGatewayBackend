const express = require('express');
const connectDB = require('./DBConnection/Connection');
const app = express();

connectDB();
app.use(express.json({extended : false}));
app.use('/api/userModel',require('./Api/User'));
const Port = process.env.Port || 5000;

app.listen(Port,() => console.log("Server started"));