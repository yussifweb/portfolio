import React, { Component } from 'react'
import profile from '../images/profile.png'

export class Home extends Component {
    render() {
        // const image = "../images/" + this.props.profile
        return (
            <div>             
            <section id="cover">
            <div id="cover-caption">
            <div className="container">
                <div className="col-12 col-sm-12 mt-5 mb-5 info">
                <img className="rounded-circle" src={profile} alt="Yussif" width="300" height="300"/>
                <h3>Yussif</h3>
                <h3>{this.props.intro1}</h3>
                <h4>{this.props.intro2}</h4>
                <p>{this.props.intro3}</p>
                <p>{this.props.intro4}</p>
                </div>
            </div>
            </div>
            </section>
  
        </div>
        )
    }
}

export default Home

