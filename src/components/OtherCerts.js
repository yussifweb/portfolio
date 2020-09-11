import React, { Component } from 'react'

export class OtherCerts extends Component {
    render() {
        return (
            <div key={this.props.name} className="col-12 col-sm-6 mx-auto">
                <ul class="list-group my-2">
                <li class="list-group-item">
                    {this.props.name} <br/>
                    <em>By {this.props.by}</em>
                </li>
                </ul>
            </div>
        )
    }
}

export default OtherCerts
