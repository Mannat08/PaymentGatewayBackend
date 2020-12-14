const mongoose = require('mongoose');

const user = new mongoose.Schema({
//cardnumber
//expiration date
//cvv
//card owner
cardNumber : {
    type :  Number,
    required : true
},
expirationDate : {
    type : Date,
    required : true
},
cvv : {
    type :Number,
    required : true
},
ownerName : {
    type : String,
    required : true
}
});

module.exports = User = mongoose.model('user',user);