import React, { Component } from 'react'
import '../index.css';
export default class NavBar extends Component {
  render() {
    return (
      <div>
     
<header>
 
  <nav id="sidebarMenu" className="collapse d-lg-block sidebar collapse bg-black">
    <div className="position-sticky">
      <div className="list-group list-group-flush mx-3 mt-4">
        <a
          href="#"
          className="list-group-item list-group-item-action py-2 ripple bg-black"
          aria-current="true">
          <i className="fas fa-tachometer-alt fa-fw me-3"></i><span>Main dashboard</span>
        </a>
        <a href="#" className="list-group-item list-group-item-action py-2 ripple active">
          <i className="fas fa-chart-area fa-fw me-3"></i><span>Our Mission</span>
        </a>
        <a href="#" className="list-group-item list-group-item-action py-2 ripple"
          ><i className="fas fa-lock fa-fw me-3"></i><span>Our Vision</span></a>
        <a href="#" className="list-group-item list-group-item-action py-2 ripple">
          <i className="fas fa-chart-line fa-fw me-3"></i><span>Analytics</span></a>
        <a href="#" className="list-group-item list-group-item-action py-2 ripple">
          <i className="fas fa-chart-pie fa-fw me-3"></i><span>SEO</span>
        </a>
        <a href="#" className="list-group-item list-group-item-action py-2 ripple"
          ><i className="fas fa-chart-bar fa-fw me-3"></i><span>Orders</span></a>
        <a href="#" className="list-group-item list-group-item-action py-2 ripple"
          ><i className="fas fa-globe fa-fw me-3"></i><span>International</span></a>
        <a href="#" className="list-group-item list-group-item-action py-2 ripple"
          ><i className="fas fa-building fa-fw me-3"></i><span>Partners</span></a>
        <a href="#" className="list-group-item list-group-item-action py-2 ripple"
          ><i className="fas fa-calendar fa-fw me-3"></i><span>Calendar</span></a>
        <a href="#" className="list-group-item list-group-item-action py-2 ripple"
          ><i className="fas fa-users fa-fw me-3"></i><span>Student-Guide</span></a>
        <a href="#" className="list-group-item list-group-item-action py-2 ripple"
          ><i className="fas fa-money-bill fa-fw me-3"></i><span>Institutions</span></a>
      </div>
    </div>
  </nav>
 

  
  <nav id="main-navbar" className="navbar navbar-expand-lg navbar-light fixed-top" style={{backgroundColor:"black",}}>
   
    <div className="container-fluid">
     
      <button
        className="navbar-toggler"
        type="button"
        data-mdb-toggle="collapse"
        data-mdb-target="#sidebarMenu"
        aria-controls="sidebarMenu"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <i className="fas fa-bars"></i>
      </button>

      <a className="navbar-brand" href="#">
        <img
          src="https://w7.pngwing.com/pngs/349/579/png-transparent-publishing-education-student-computer-icons-management-student-angle-rectangle-orange.png"
          height="35"
          alt="MDB Logo"
          loading="lazy"
        />
      </a>
    
    </div>
   
  </nav>
 
</header>



<main style={{marginTop:" 58px"}}>
  <div className="container pt-4"></div>
</main>

</div>
    )
  }
}
