import React, { Component } from 'react'

export class OtherSkills extends Component {
    render() {
        return (
            <div key={this.props.name} className="col-12 col-sm-8 offset-sm-2">
               <ul className="list-unstyled">
                   <li>{this.props.name}</li>
                </ul> 
                
            </div>
        )
    }
}

export default OtherSkills
