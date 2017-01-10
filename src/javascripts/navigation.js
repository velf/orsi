import React, { Component } from 'react';
import jump from 'jump.js';
import '../stylesheets/navigation.scss';

class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: '#top'
    };
  }

  isActive(value){
    return ''+((value===this.state.selected) ?'active':'');
  }

  jump(id) {
    this.setState({selected: id });
    jump(id,{
      offset: -62
    });
  }
  render(){
    return (
      <nav>
        <ul>
          <li className={this.isActive('#top')} onClick={this.jump.bind(this, '#top')}><a href="#">home</a></li>
          <li className={this.isActive('#industry')} onClick={this.jump.bind(this, '#industry')}><a href="#">industry</a></li>
          <li className={this.isActive('#academics')} onClick={this.jump.bind(this, '#academics')}><a href="#">academics</a></li>
          <li className={this.isActive('#activism')} onClick={this.jump.bind(this, '#activism')}><a href="#">activism</a></li>
        </ul>
      </nav>
      );
  }

}

export default Navigation;
