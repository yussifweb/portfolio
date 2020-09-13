import React, { Component } from 'react'

export class OtherWorks extends Component {
    render() {
        return (
            <div key={this.props.name} className="col-12 col-sm-8 offset-sm-2 mx-auto">
                <ul className="list-group my-2">
                <li className="list-group-item">
                    {this.props.name} <br/>
                    <em>{this.props.job}</em>
                </li>
                </ul>
            </div>
        )
    }
}

export default OtherWorks
