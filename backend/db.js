const mongoose = require('mongoose');
// const mongoURI="mongodb://localhost:27017/Ecommerce"
const mongoURI="mongodb+srv://gyanthakur:ukjwg8YUP8NfhTpp@cluster0.l8twlcn.mongodb.net/Ecommerce?retryWrites=true&w=majority"
mongoose.connect(mongoURI)
.then(()=> console.log("Database connected sucessfully"))
.catch(err => console.log("Error setting up database",err.message));