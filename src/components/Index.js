import React from 'react'
import Home from './Home'
import info from './info.json'
import logo from '../images/NETKID1N.jpg'   

function index(){
    return(
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <a class="navbar-brand" href="#">
            <img className="rounded-circle" src={logo} width="30" height="30" alt="" loading="lazy"/></a>            
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span></button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav mx-auto">
            <a className="nav-link active" href="#">Home <span className="sr-only">(current)</span></a>
            <a className="nav-link" href="#">About</a>
            <a className="nav-link" href="#">Skills</a>
            <a className="nav-link" href="#">Portfolio</a>
            <a className="nav-link" href="#">Contact</a>
            </div>
         </div>
         </nav>

         {
            info.index.map((home) => {
          return <Home key={home.intro1} intro1={home.intro1} intro2={home.intro2} intro3={home.intro3} intro4={home.intro4}/>;
        })
      }

        </div>
    )

}

export default index