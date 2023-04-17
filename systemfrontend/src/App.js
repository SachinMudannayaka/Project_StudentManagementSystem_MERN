import React, { Component } from 'react'
import axios from 'axios';
export default class App extends Component {

constructor(props){
super(props);
this.state={student:[]}
}

componentDidMount(){
  this.retriveStudents();
}

retriveStudents(){
  axios.get("http://localhost:8000/getAllstudent").then(res=>{
    if(res.data.success){
      this.setState({student:res.data.existingStudents});
      console.log(this.state.student);
    }
  })
}
  render() {
    return (
      <div>
        {this.state.student.map(student=>(
        <div>
          <p>{student.student_id}</p>
          <p>{student.name}</p>
          <p>{student.address}</p>
          <p>{student.contact}</p>
        </div>))}
      </div>
    )
  }
}
