import React, { Component } from 'react';
import jump from 'jump.js';

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
          <li className={this.isActive('#top')} onClick={this.jump.bind(this, '#top')}><a>home</a></li>
          <li className={this.isActive('#industry')} onClick={this.jump.bind(this, '#industry')}><a>industry</a></li>
          <li className={this.isActive('#academics')} onClick={this.jump.bind(this, '#academics')}><a>academics</a></li>
          <li className={this.isActive('#skills')} onClick={this.jump.bind(this, '#skills')}><a>skills</a></li>
          <li className={this.isActive('#activism')} onClick={this.jump.bind(this, '#activism')}><a>activism</a></li>
        </ul>
      </nav>
      );
  }

}

export default Navigation;
