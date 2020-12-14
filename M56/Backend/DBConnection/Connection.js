const mongoose = require('mongoose');

const URI = "mongodb+srv://dbUser:dbUser@cluster0.xek9q.mongodb.net/<dbname>?retryWrites=true&w=majority";

const connectDB = async () =>{
    await mongoose.connect(URI,
        { useUnifiedTopology: true,
          useNewUrlParser : true
        });
    console.log("DB has been connected");
}; 

module.exports = connectDB;