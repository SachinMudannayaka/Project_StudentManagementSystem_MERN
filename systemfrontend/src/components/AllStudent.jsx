import React, { Component } from 'react'
import axios from 'axios';
//import { post } from '../../../server/routes/student';

export default class Body extends Component {
    constructor(props){
        super(props);
        this.state={student:[]}
        }
        
        componentDidMount(){
          this.retriveStudents();
        }
        
        retriveStudents(){
          axios.get("/getAllstudent").then(res=>{
            if(res.data.success){
              this.setState({student:res.data.existingStudents});
              console.log(this.state.student);
            }
          })
        }

        onDelete=(id)=>{
        axios.delete(`/deleteAuser/${id}`).then((res)=>{
          alert ("Student Deleted Successfully");
          this.retriveStudents();
        })
        }


        filterData(student,searchKey){
          const result=student.filter((students)=>
          students.name.toLowerCase().includes(searchKey)||students.student_id.includes(searchKey)||
         students.address.toLowerCase().includes(searchKey)
         )
          this.setState({student:result})
        }


handleSearchArea=(e)=>{
 const searchKey= e.currentTarget.value;
 axios.get("/getAllstudent").then(res=>{
  if(res.data.success){
    this.filterData(res.data.existingStudents,searchKey);
  }
})
}

  render() {
    return (
      
      <div className='allStudentDisplayList'>
        <div><input className='form-control' type='search' placeholder='Search' name='searchQuery' onChange={this.handleSearchArea}></input></div>
        <div className='addStudentbtn'>
        <button className='btn btn-success'><a href="/addStudent"style={{textDecoration:'none' ,color:'white'}}>ADD A STUDENT</a></button>
        </div>
       
       <table className='table' style={{color:'white'}} >
        <thead>
            <tr>
                <th scope='col'>#</th>
                <th scope='col'>STUDENT_ID</th>
                <th scope='col'>NAME</th>
                <th scope='col'>ADDRESS</th>
                <th scope='col'>CONTACT</th>
                <th scope='col'>ACTION</th>

            </tr>
        </thead>
<tbody>
    {this.state.student.map((student,index)=>(
       <tr key={index}>
          <th scope="row">{index+1}</th>
          <td><a href={`/getaStudent/${student._id}`} style={{textDecoration:'none'}}>{student.student_id}</a></td>
          <td>{student.name}</td>
          <td>{student.address}</td>
          <td>{student.contact}</td>
          <td><a className='btn btn-warning' href={`/update/${student._id}`}><i className='fas fa-edit'>&nbsp;EDIT</i></a> &nbsp;
             <a className='btn btn-danger' href="/" onClick={()=>this.onDelete(student._id)}><i className='far fa-trash-alt'>&nbsp;DELETE</i></a>
        </td>
    </tr>
    ))}
</tbody>
      </table>
      
      </div>
    )
  }
}
