import React from "react";
import PropTypes from "prop-types";
import "./Navbar.css"
// import { Link } from 'react-router-dom'
const Navbar_using_props=(props)=>{
    // const Navbar_using_props=({about})=>{ mean of the line is the props.about every place we can use about at the place of the props.about. 

return(
        <>
<nav className={`myclass navbar navbar-expand-lg navbar-${props.navbg} bg-${props.navbg}`}>
  <div className="container-fluid">
    <div className="container-2">
  <div className=" navbar-brand" href="#">{props.tittle}</div>
  <li className="nav-item"> 
          <a className="one"style={{color:props.colorChanger==="null"?'black':'white'}} href="#">Home</a>
        </li>
        {/* <form className="search-bar" role="search">
        <input className="search-bar-child form-control "  placeholder="Search"type="Search" aria-label="Search"/>
        <button className=" search-btn btn btn-outline-success" type="Search">Search</button>
      </form> */}
      <div className="btn2 form-check form-switch mx-3 ">
  <input className=" tgl form-check-input" type="checkbox"onClick={props.togglemode} role="switch" id="flexSwitchCheckDefault"/>
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault"></label>
</div>
  </div>




    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        {/* <li className="nav-item">
          <a className="one"style={{color:props.colorChanger==="null"?'black':'white'}} href="#">Home</a>
        </li> */}
        {/* <li className="nav-item">
          <a className="two"style={{color:props.colorChanger==="null"?'black':'white'}} href="#"></a>
        </li> */}
   
      </ul>
      {/* <form className="search-bar" role="search">
        <input className="search-bar-child form-control "  placeholder="Search"type="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="Search">Search</button>
      </form> */}
      {/* <button type="button" className="btn btn-primary mx-2" onClick={()=>{props.togglemode('Primary')}}>Primary</button>
      <button type="button" className="btn btn-success mx-2"onClick={()=>{props.togglemode('Success')}}>Success</button>
      <button type="button" className="btn btn-danger mx-2"onClick={()=>{props.togglemode('Danger')}}>Danger</button>
      <button type="button" className="btn btn-warning mx-2"onClick={()=>{props.togglemode('Warning')}}>Warning</button>
      <button type="button" className="btn btn-info mx-2"onClick={()=>{props.togglemode('Info')}}>Info</button> */}
      {/* <div className="form-check form-switch mx-3 ">
  <input className="form-check-input" type="checkbox"onClick={props.togglemode} role="switch" id="flexSwitchCheckDefault"/>
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault"></label>
</div> */}
    </div>
  </div>
</nav>
        </>
    )
}
Navbar_using_props.propTypes={
    tittle: PropTypes.string,
    about: PropTypes.string
}
Navbar_using_props.defaultProps={
    tittle: 'Facebook',
    about: 'Harry'
    }
export default Navbar_using_props;