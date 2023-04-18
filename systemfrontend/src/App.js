import React, { Component } from 'react'
import{BrowserRouter, Route, Routes} from "react-router-dom";
//import axios from 'axios';
import AllStudent from './components/AllStudent';
import AddStudent from './components/AddStudent';
import EditStudent from './components/EditStudent';
import StudentDetails from './components/StudentDetails';
//import NavBar from './components/NavBar';
export default class App extends Component {
 

  render() {
    return (
     <BrowserRouter>
      <div className='container'>
     
     
     
        <Routes>
        <Route path="/" element={<AllStudent/>} exact/>
       <Route path="/addStudent" element={<AddStudent/>}/>
       <Route path="/update/:id"element={<EditStudent/>}/>
        <Route path="/getaStudent/:id" element={<StudentDetails/>}/>
       
      </Routes>
     
    
    </div>
    </BrowserRouter>
    )
  }
}
