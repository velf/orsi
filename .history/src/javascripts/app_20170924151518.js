import React, { Component } from 'react';

import Header from '../javascripts/header';
import Navigation from '../javascripts/navigation';
import Content from '../javascripts/content';
import Skills from '../javascripts/skills';
import Activism from '../javascripts/activism';
import Footer from '../javascripts/footer';

import data from '../javascripts/data';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Navigation />
        <Header {...data.user} />
        <Content  {...data} />
        <Skills />
        <Activism {...data} />
        <Footer {...data.user} />
      </div>
    );
  }
}


// App.propTypes = {
//   // txt: React.PropTypes.string,
//   // cat: React.PropTypes.number.isRequired
//   data: React.PropTypes.object
// }
//
// App.defaultProps ={
//   // txt: 'this is the default txt'
// }

export default App;
