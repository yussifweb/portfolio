import React, { Component } from 'react'
import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap'

class Skills extends Component {
    // eslint-disable-next-line react/require-render-return
    render() {
        const skill = this.props.info.skills.map((skill) => {
        return (
            <div className="container">
                <div className="row">   
                 <div key={skill.name} className="col-6 col-sm-4">
                 <Card>
                  <CardImg width="100%" src={skill.class} alt={skill.name} />
                  <CardImgOverlay>
                      <CardTitle>{skill.name}</CardTitle>
                  </CardImgOverlay>
                </Card>
                 </div>    
                </div>                
            </ div>
        )
        })
    }
}

   {/* <div class="card" width="">
     <img src="" class="card-img-top" alt=""/>
    <div class="card-body">
    <h5 class="card-title">{this.props.name}</h5>
    </div>
    </div>   */}

export default Skills
