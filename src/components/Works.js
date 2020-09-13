import React, { Component } from 'react'

export class Works extends Component {
    render() {
        return (
            <div key={this.props.date} className="col-12 col-sm-8 offset-sm-2 mx-auto">
                <ul className="list-group my-2">
                <li className="list-group-item">
                    {this.props.name} <br/>
                    <em>{this.props.date}</em>
                </li>
                </ul>
            </div>
        )
    }
}

export default Works
