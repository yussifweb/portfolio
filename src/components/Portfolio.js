import React, { Component } from 'react'

export class Portfolio extends Component {
    render() {
        const img =  "../works/" + this.props.url + ".jpg";
        return (
            <div key={this.props.title} className="col-6 col-sm-3 my-3">
            <img className="img-fluid img-thumbnail" src={img}
            alt={this.props.title} title={this.props.title} />
            </div>
        )
    }
}

export default Portfolio
