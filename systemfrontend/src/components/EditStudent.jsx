import React, { Component } from 'react'
import axios from 'axios';
export default class EditStudent extends Component {

  constructor(props){
    super(props);
    this.state={student_id:"",name:"",address:"",contact:""}
  }
  
  handlingInputChange=(e)=>{
  const{name,value}=e.target;
  this.setState({
    ...this.state,[name]:value
  })
  }
  
  onSubmit=(e)=>{
   
    e.preventDefault();
    const id=this.props.match.params.id;
    const{student_id,name,address,contact}=this.state;
    const data={student_id:student_id,name:name,address:address,contact:contact}
  console.log(data);
  
  axios.put(`/updateAuser/${id}`,data).then((res)=>{
  if(res.data.success){
    alert("Student Updated Successfully")
    this.setState({
      student_id:"",
      name:"",
      address:"",
      contact:""
    })
  }
  })
  }
  



  componentDidMount(){
    const id=this.props.match.params.id;
    axios.get(`/getaStudent/${id}`).then((res)=>{
    if(res.data.success){
        this.setState({
          student_id:res.data.student.student_id,  
          name:res.data.student.name,
          address:res.data.student.address,
          contact:res.data.student.contact
        });
        console.log(this.state.student);
    }
    })
}

  render() {
    return (
      <div>
        <form>
          <h1>EDIT A STUDENT</h1>
  <hr/>
    
      <input type="text" name="student_id" className="form-control" placeholder="USER_ID" value={this.state.student_id} onChange={this.handlingInputChange}/>
    
   
      <input type="text" name="name" className="form-control" placeholder="NAME" value={this.state.name} onChange={this.handlingInputChange}/>
   
    
      <input type="text" name="address" className="form-control" placeholder="ADDRESS" value={this.state.address} onChange={this.handlingInputChange}/>
    
    
      <input type="text" name="contact" className="form-control" placeholder="CONTACT_NO" value={this.state.contact} onChange={this.handlingInputChange}/>
    

  <button type="submit" className="btn btn-primary bg-black" onClick={this.onSubmit}>UPDATE</button>
</form>
      </div>
    )
  }
}

