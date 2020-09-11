import React, { Component } from 'react'

export class Contacts extends Component {
    render() {
        const svg_path =  "../svgs/" + this.props.class + ".svg";
        return (
            <div key={this.props.name} className="col-6 col-sm-3 my-3">
            <div className="card">
            <div className="card-img mx-auto">
            <a href={this.props.url} data-toggle="tooltip" data-placement="top" title={this.props.name}>
             <img src={svg_path} alt={this.props.name} className="card-img-top" />
            </a>           
            </div>
            </div>
            </div>    
        )
    }
}

export default Contacts
