require ("dotenv").config();
const express=require("express");
const mongoose=require("mongoose");
const bodyparser=require("body-parser");
const app=express();
//import routes
const studentRoute=require('./routes/student');


//middleware
app.use(bodyparser.json());
//route variable communicate with the server 
app.use(studentRoute);

app.get('/',(req,res)=>{
    res.send("Hi there Sachin ");
})

//decleare variables of .env  file
const PORT=process.env.PORT;
const MONGOURL=process.env.Mongo_url;

//Create connection of Mongo DB
mongoose.connect(MONGOURL,{useNewUrlParser:true,useUnifiedTopology:true})
.then(console.log("SUCCESSFULLY CONNECTED TO THE DATABASE"))
.catch((err)=>{console.log(err)});


app.listen(PORT,()=>{
    console.log(`SERVER IS RUNNING ON: ${PORT}`)
})