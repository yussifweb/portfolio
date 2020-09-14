import React, { Component } from 'react'
import Home from './Home'
import About from './About'
import Contacts from './Contacts'
import Schools from './Schools'
import OtherCerts from './OtherCerts'
import Skills from './Skills'
import OtherSkills from './OtherSkills'
import Works from './Works'
import OtherWorks from './OtherWorks'
import Portfolio from './Portfolio'
import info from './info.json'
import logo from '../images/NETKID1N.jpg'
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';


export class Index extends Component {

 
  render() {
    return(
      <Router>
      <div>
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <a className="navbar-brand" href="#home">
          <img className="rounded-circle" src={logo} width="30" height="30" alt="" loading="lazy"/></a>            
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav mx-auto">
          <Link to='/'>
          <li className="nav-link">Home<span className="sr-only">(current)</span></li>
          </Link>
          <Link to='/about'>
          <li className="nav-link">About</li>
          </Link>
          <Link to='/schools'>
          <li className="nav-link">Education</li>
          </Link>
          <Link to='/skills'>
          <li className="nav-link">Skills</li>
          </Link>
          <Link to='/works'>
           <li className="nav-link">Work</li>
          </Link>
          <Link to='/portfolio'>
          <li className="nav-link">Portfolio</li>
          </Link>
          </div>
          <label className="switch">
          <input type="checkbox" />
          <span className="slider round"></span>
        </label>
       </div>
       </nav>

      <Switch>
      <Route path="/" exact component={Home}>
      <div>
      {
        info.index.map((home) => {
        return <Home key={home.intro1} profile={home.profile} intro1={home.intro1} intro2={home.intro2} intro3={home.intro3} intro4={home.intro4}/>;
       })
      }
      </div>
      </Route>
      
      <Route path="/about" component={About}>
      <div className="container">
      <div className="row">
      <div className="mx-auto my-3">
          <h1 className="ud">About Me</h1>
      </div>
      </div> 
      <div className="row">
      {
       info.about.map((about) => {
        return <About key={about.first_name} first_name={about.first_name} last_name={about.last_name} age={about.age} country={about.country}></About>
        })
      }
      </div>

      <div className="row">
      <div className="mx-auto my-3">
          <h1 className="ud">Contact Me</h1>
      </div>
      </div> 
      <div className="row">    
      {
       info.contacts.map((contact) => {
        return <Contacts key={contact.url} url={contact.url} class={contact.class} name={contact.name}></Contacts>
        })
      }
      </div>
      </div>
      </Route>

      <Route path="/schools" component={Schools}>
      <div className="container">
      <div className="row">
      <div className="mx-auto my-3">
          <h1 className="ud">Education</h1>
      </div>
      </div> 
      <div className="row">
      {
       info.education.map((school) => {
        return <Schools key={school.name} name={school.name} cert={school.cert}></Schools>
        })
      }    
      </div>
      <div className="row">
      <div className="mx-auto my-3">
          <h1 className="ud">Other</h1>
      </div>
      </div> 
      <div className="row">
      {
       info.other_certs.map((otherCert) => {
        return <OtherCerts key={otherCert.name} name={otherCert.name} by={otherCert.by} url={otherCert.url}></OtherCerts>
        })
      } 
      </div>
      </div>
      </Route>

      <Route path="/skills" component={Skills}>
      <div className="container">
      <div className="row">
      <div className="mx-auto my-3">
          <h1 className="ud">Skills</h1>
      </div>
      </div> 
      <div className="row">
      {
       info.skills.map((skill) => {
        return <Skills key={skill.name} name={skill.name} class={skill.class}></Skills>
        })
      }    
      </div>
      <div className="row">
      <div className="mx-auto my-3">
          <h1 className="ud">Relevant Skills</h1>
      </div>
      </div> 
      <div className="row">
      {
       info.rel_skills.map((relSkill) => {
        return <OtherSkills key={relSkill.name} name={relSkill.name}></OtherSkills>
        })
      }    
      </div>
      </div>
      </Route>

      <Route path="/works" component={Works}>
      <div className="container">
      <div className="row">
      <div className="mx-auto my-3">
          <h1 className="ud">Employment Details</h1>
      </div>
      </div> 
      <div className="row">
      {
       info.works.map((work) => {
        return <Works key={work.date} name={work.name} date={work.date}></Works>
        })
      }    
      </div>
      <div className="row">
      <div className="mx-auto my-3">
          <h1 className="ud">Other</h1>
      </div>
      </div> 
      <div className="row">
      {
       info.other_works.map((otherWork) => {
        return <OtherWorks key={otherWork.name} name={otherWork.name} job={otherWork.job}></OtherWorks>
        })
      } 
      </div>
      </div>
      </Route>

      <Route path="/portfolio" component={Portfolio}>
      <div className="container">
      <div className="row">
      <div className="mx-auto my-3">
          <h1 className="ud">Portfolio</h1>
      </div>
      </div> 
      <div className="row">    
      {
       info.portfolio.map((portfolio) => {
        return <Portfolio key={portfolio.url} url={portfolio.url} title={portfolio.title}></Portfolio>
        })
      }
      </div>
      </div>
      </Route>
      </Switch>


            

    <div>
    <footer className="bg-dark" id="foot">
    <p>&copy; 2018 - {new Date().getFullYear()} NetKid Gh. <br/>All rights reserved.</p>
    </footer>
    </div>
      </div>
      </Router>
  )
}
}

export default Index