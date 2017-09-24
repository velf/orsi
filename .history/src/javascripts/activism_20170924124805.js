import React, { Component } from 'react';
import '../stylesheets/activism.scss';


class Activism extends Component {
  render(){
    const activism = this.props.activism.map((item, i) => (
      <li key={i}>
        <a key={i} href={item.url} target="blank">
          <img src={item.image} alt={item.title} />
          <p>{item.title}</p>
        </a>
      </li>
    ));
    return (
      <div className="activism">
        <div className="title-stripe">
          <h2 id="activism">Activism</h2>
          <div></div>
        </div>
        <ul>
          {activism}
        </ul>
      </div>
      );
  }
}

export default Activism;
