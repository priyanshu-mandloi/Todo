const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/Todo_App");
const db = mongoose.connection;
db.on('error',console.error.bind(console,"Error connecting to mongodb"));
db.once("open",function(){
  console.log("Conneted to Database :: mongodb");
 });

 module.exports=db;