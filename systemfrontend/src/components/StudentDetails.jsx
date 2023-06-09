import React, { Component,setState } from 'react'
import axios from 'axios';
export default class StudentDetails extends Component {
  constructor(props){
    super(props);
    this.state={
      student:{}
    };
  }

  componentDidMount(){
    const id=this.props.match.params.id;
    axios.get(`/getaStudent/${id}`).then((res)=>{
    if(res.data.success){
        this.setState({
            student:res.data.student
        });
        console.log(this.state.student);
    }
    })
}


  render() {
    const{student_id,name,address,contact}=this.state.student;
    return (
     
      <div style={{marginTop:'20px'}}>
        
      <h4>{name}</h4>
      <hr/>

      <dl className='row'>
        <dt className='col-sm-3'>STUDENT_ID</dt>
        <dd className='col-sm-9'>{student_id}</dd>

        <dt className='col-sm-3'>STUDENT_Name</dt>
        <dd className='col-sm-9'>{name}</dd>

        <dt className='col-sm-3'>ADDRESS</dt>
        <dd className='col-sm-9'>{address}</dd>

        <dt className='col-sm-3'>CONTACT NO</dt>
        <dd className='col-sm-9'>{contact}</dd>

      </dl>
      

      </div>
   
 )
  }
}
