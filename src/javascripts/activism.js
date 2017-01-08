import React, { Component } from 'react';
import '../stylesheets/activism.scss';


class Activism extends Component {
  render(){
    const activism = this.props.activism.map((item, i) => (
      <a key={i} href={item.url} target="blank">
        <section style={{backgroundImage: 'url(' + item.image + ')'}}>
          <p>{item.title}</p>
        </section>
      </a>
    ));
    return (
      <div className="activism">
        <h1>Activism</h1>
        {activism}
      </div>
      );
  }
}

export default Activism;
