import React from 'react'
import Home from './Home'
import About from './About'
import Skills from './Skills'
import info from './info.json'
import logo from '../images/NETKID1N.jpg'   

function index(){
    return(
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <a className="navbar-brand" href="#home">
            <img className="rounded-circle profile" src={logo} width="30" height="30" alt="" loading="lazy"/></a>            
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span></button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav mx-auto">
            <a className="nav-link active" href="#home">Home <span className="sr-only">(current)</span></a>
            <a className="nav-link" href="#about">About</a>
            <a className="nav-link" href="#skills">Skills</a>
            <a className="nav-link" href="#works">Portfolio</a>
            <a className="nav-link" href="#contact">Contact</a>
            </div>
         </div>
         </nav>

         {
            info.index.map((home) => {
          return <Home key={home.intro1} profile={home.profile} intro1={home.intro1} intro2={home.intro2} intro3={home.intro3} intro4={home.intro4}/>;
        })
      }

      {
        info.about.map((about) => {
          return <About key={about.first_name} first_name={about.first_name} last_name={about.last_name} age={about.age} country={about.country}></About>
        })
      }

{
        info.skills.map((skill) => {
          return <Skills key={skill.name} name={skill.name} svg={skill.class} />
        })
      }

      <div>
      <footer className="bg-dark" id="foot">
      <p>&copy; 2018 - {new Date().getFullYear()} NetKid Gh. <br/>All rights reserved.</p>
      </footer>
      </div>
        </div>
    )

}

export default index