import React, { Component } from 'react'
import profile from '../images/profile.png'

export class Home extends Component {
    render() {
        // const image = "../images/" + this.props.profile
        return (
            <div id="cover" > 
            <div id="cover-caption" className="container">
            <div className="row">
            <div className="col-12 col-sm-12 mt-5 mb-5 info">
                <img className="rounded-circle profile" src={profile} alt="Yussif" />
                <h3>Yussif</h3>
                <h3>{this.props.intro1}</h3>
                <h4>{this.props.intro2}</h4>
                <p>{this.props.intro3}</p>
                <p>{this.props.intro4}</p>
            </div>
            </div>
            </div>
  
        </div>
        )
    }
}

export default Home

