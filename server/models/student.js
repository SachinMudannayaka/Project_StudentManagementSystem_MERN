const mongoose=require("mongoose");
const postStudentSchema= new mongoose.Schema({

    student_id:{
        type:String,
        required:true,
    },
    name:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    contact:{
        type:String,
        required:true
    }

});
module.exports=mongoose.model('student',postStudentSchema);