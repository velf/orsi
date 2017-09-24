import React, { Component } from 'react';
import Skill from './skill-graph';



// The number of data points for the chart.
const numDataPoints = 50;

// A function that returns a random number from 0 to 1000
const randomNum     = () => Math.floor(Math.random() * 1000);

// A function that creates an array of 50 elements of (x, y) coordinates.
const randomDataSet = () => {
  return Array.apply(null, {length: numDataPoints}).map(() => [randomNum(), randomNum()]);
}

class Graph extends Component{
  constructor(props) {
    super(props);
    this.state = { data: randomDataSet() };
  }
  componentDidMount() {
    // Skill.init();
  }
  render() {
    return (
      <div>
        { /* <div id="graph"></div> */ }
        <center>
          <img style={{ maxWidth: '100%' }} src="/images/skill_network.svg" alt="skills graph" />
        </center>
      </div>)
  }
}

export default Graph;
