const express = require('express');
const mongoose = require('mongoose');
const User = require('../DBConnection/User');
const route = express.Router();

route.post('/',async (req,res)=>{
    try{
        const {cardNumber,expirationDate,cvv,ownerName} = req.body;
        if(cardNumber.length !== 16)
        return res
        .status(400)
        .json({msg : 'Card Number length must be of 16 digits'});

        if(cvv.length !== 3)
        return res
        .status(400)
        .json({msg : 'Cvv must be of 3 digits'});

    let user = {};
    user.cardNumber = cardNumber;
    user.expirationDate = expirationDate;
    user.cvv = cvv;
    user.ownerName = ownerName;
   
    let userModel = new User(user);
    await userModel.save();
    res.json(userModel);
    }catch(err){
        res.status(500).json({error : err.message}); 
    }
    
});

module.exports = route;

