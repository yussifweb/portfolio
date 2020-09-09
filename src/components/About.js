import React, { Component } from 'react'

export class About extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">   
                 <div className="col-12 col-sm-10 offset-sm-2">
                 <h2>Name: <span>{this.props.first_name}</span> <span>{this.props.last_name}</span></h2>
                 <h2>Age : <span className="ml-4">{this.props.age}</span></h2>
                 <h2>Location : {this.props.country}</h2>
                 </div>    
                </div>                
            </div>
        )
    }
}

export default About
