const express=require("express");
const Student=require("../models/student");
//const student = require("../models/student");

const router = express.Router();

//save a student
router.post('/addStudent',(req,res)=>{
 let newStudent= new Student(req.body);
 newStudent.save((err)=>{
    if(err){
        res.status(400).json({error:err});
    }
    return res.status(200).json({success:"Student Saved Successfully"});
 });


});

//get all users from database
router.get('/getAllstudent',(req,res)=>{
    Student.find().exec((err,students)=>{
        if(err){
            return res.status(400).json({error:err})
        }
        return res.status(200).json({success:true, existingStudents:students});
    });
});

//get a users from database
router.get('/getaStudent/:id',(req,res)=>{
    let studentId=req.params.id;
    Student.findById(studentId, (err,student)=>{
        if(err){
            return res.status(400).json({success:false,err})
        }
        return res.status(200).json({success:true, student});
    });
});

//update a student
router.put('/updateAuser/:id',(req,res)=>{
Student.findByIdAndUpdate(
    req.params.id,{$set:req.body},(err,student)=>{
        if(err){
            return res.status(400).json({error:err})
        }
        return res.status(200).json({success:true,student});
    });
});

//Delete a user
router.delete('/deleteAuser/:id',(req,res)=>{
    Student.findByIdAndRemove(
        req.params.id
    ).exec((err,deletedStudent)=>{
        if(err){
            return req.status(400).json({error:err});
        }
        return res.json({message:"Delete a Student Successfully",deletedStudent});
    });
});

module.exports=router;