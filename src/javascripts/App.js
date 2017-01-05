import React, { Component } from 'react';
import '../stylesheets/App.scss';

import Header from '../javascripts/header';
import Navigation from '../javascripts/navigation';
import Content from '../javascripts/content';
import Footer from '../javascripts/footer';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Header />
        <Navigation />
        <Content />
        <Footer />
      </div>
    );
  }
}

export default App;
