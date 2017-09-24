import React, { Component } from 'react';

class Footer extends Component {
  year() {
    let date = new Date();
    return date.getFullYear();
  }
  render(){
    return (
        <footer>
          <p className="heart"> ♥ </p>
          <p>{this.props.name}</p>
          <p>Copyright © {this.year()}, all rights reserved.</p>
        </footer>
      );
  }

}

export default Footer;
