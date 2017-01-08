import React, { Component } from 'react';
import '../stylesheets/footer.scss';


class Footer extends Component {
  year() {
    let date = new Date();
    return date.getFullYear();
  }
  render(){
    return (
        <footer>
          <p>Copyright © {this.year()} {this.props.name} All rights reserved.</p>
        </footer>
      );
  }

}

export default Footer;
