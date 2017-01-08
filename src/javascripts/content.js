import React, { Component } from 'react';
import '../stylesheets/content.scss';

class Content extends Component {

  render(){
    const industry = this.props.industry.map((item, i) => (
      <div key={i}>
        <p>{item.date}</p>
        <p><a href={item.url}></a>{item.title}</p>
        <p>{item.description}</p>
      </div>
    ));
    const academics = this.props.academics.map((item, i) => (
      <div key={i}>
        <p>{item.date}</p>
        <p><a href={item.url}></a>{item.title}</p>
        <p>{item.description}</p>
      </div>
    ));
    return (
      <main>
        <article>
          <h2>Industry</h2>
          {industry}
          <h2>Academics</h2>
          {academics}
        </article>

        <aside>
          <h1>Social graph</h1>
          <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>
        </aside>

      </main>
      );
  }

}

export default Content;
