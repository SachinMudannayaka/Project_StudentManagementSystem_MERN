import React, { Component, useState } from 'react'
import axios from 'axios';
export default class AddStudent extends Component {

constructor(props){
  super(props);
  this.state={student_id:"",name:"",address:"",contact:""};
}


  

handlingInputChange=(e)=>{
const{name,value}=e.target;
this.setState({
  ...this.state,[name]:value
  
}
)
//console.log(this.setState);
}

onSubmit=(e)=>{
  e.preventDefault();
  const{student_id,name,address,contact}=this.state;
  const data={student_id:student_id,name:name,address:address,contact:contact}
console.log(data);


axios.post("/addStudent",data).then((res)=>{
if(res.data.success){
  this.setState({
    student_id:"",
    name:"",
    address:"",
    contact:"",
    
  })
  alert("A Student Added");
 
}
})
}



  render() {
    return (
      <div className='container'>
          <div className="form-body">
         
        <div className="row">
            <div className="form-holder">
                <div className="form-content">
                    <div className="form-items">
                        <h3>Register Today</h3>
                        <p>Fill in the data below.</p>
                        <form className="requires-validation" noValidate>

                            <div className="col-md-12">
                               <input className="form-control" type="text" name="student_id" value={this.state.student_id}onChange={this.handlingInputChange} placeholder="USER_ID" required/>
                               <div className="valid-feedback">Username field is valid!</div>
                               <div className="invalid-feedback">Username field cannot be blank!</div>
                            </div>

                            <div className="col-md-12">
                                <input className="form-control" type="text" name="name" value={this.state.name}onChange={this.handlingInputChange} placeholder="Student Name" required/>
                                 <div className="valid-feedback">Name is valid!</div>
                                 <div className="invalid-feedback">Name field cannot be blank!</div>
                            </div>

                           


                            <div className="col-md-12">
                              <input className="form-control" type="text" name="address"  value={this.state.address} onChange={this.handlingInputChange} placeholder="Addrress" required/>
                               <div className="valid-feedback">Address field is valid!</div>
                               <div className="invalid-feedback">Address field cannot be blank!</div>
                           </div>

                           <div className="col-md-12">
                              <input className="form-control" type="text" name="contact"  value={this.state.contact} onChange={this.handlingInputChange} placeholder="Contact no" required/>
                               <div className="valid-feedback">Address field is valid!</div>
                               <div className="invalid-feedback">Address field cannot be blank!</div>
                           </div>


                          
                        <div className="form-check">
                          <input className="form-check-input" type="checkbox" value="" id="invalidCheck" required/>
                          <label className="form-check-label">I confirm that all data are correct</label>
                         <div className="invalid-feedback">Please confirm that the entered data are all correct!</div>
                        </div>
                  

                            <div className="form-button mt-3">
                                <button id="submit" type="submit" className="btn btn-primary" onClick={this.onSubmit}>Register</button>
                            </div>

                            <pre style={{color:'white'}}>{JSON.stringify(this.state,undefined,2)}</pre>
                        </form>
                          
                    </div>
                </div>
            </div>
             
        </div>
    </div>
   
    </div>
    )
    }
}
