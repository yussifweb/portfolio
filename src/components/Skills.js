import React, { Component } from 'react'
// import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap'

export class Skills extends Component {
    render() {
        const svg_path =  "../svgs/" + this.props.class + ".svg";
        return (
            <div key={this.props.name} className="col-6 col-sm-3">
            <div className="card">
            <div className="card-img mx-auto">
            <img src={svg_path} alt={this.props.name} className="card-img-top" />
            </div>
            <div className="card-body">
             <h6 className="card-title text-center">{this.props.name}</h6>
            </div>
            </div>
            </div>    
           )
    }
}

export default Skills