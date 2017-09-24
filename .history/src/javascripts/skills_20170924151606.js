import React, { Component } from 'react';
import Graph from '../javascripts/graph/graph';

class Skills extends Component {
  render(){
    return (
      <div className="skills">
        <div className="title-stripe">
          <h2 id="skills">Skills</h2>
          <div></div>
        </div>
        <Graph />
      </div>
      );
  }
}

export default Skills;
