import React, { Component } from 'react'

export class Schools extends Component {
    render() {
        return (
            <div key={this.props.name} className="col-12 col-sm-8 offset-sm-2 mx-auto">
                <ul class="list-group my-2">
                <li class="list-group-item">
                    {this.props.name} <br/>
                    <em>{this.props.cert}</em>
                </li>
                </ul>
            </div>
        )
    }
}

export default Schools
