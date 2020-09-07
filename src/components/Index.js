import React from 'react'
import logo from '../images/NETKID1N.jpg'   

function index(){
    return(
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <a class="navbar-brand" href="#">
            <img src={logo} width="30" height="30" alt="" loading="lazy"/></a>            
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span></button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav mr-auto"></div>
            <div className="navbar-nav mr-5">
            <a className="nav-link active" href="#">Home <span className="sr-only">(current)</span></a>
            <a className="nav-link" href="#">About</a>
            <a className="nav-link" href="#">Skills</a>
            <a className="nav-link" href="#">Portfolio</a>
            <a className="nav-link" href="#">Contact</a>
            </div>
         </div>
         </nav>


        </div>
    )

}

export default index