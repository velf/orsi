import React, { Component } from 'react';
import '../stylesheets/content.scss';

class Content extends Component {

  templateBuilder(item, i){
    return <article key={i} className="experience-block">
            <p>{item.date}</p>
            <p>{item.title}</p>
            <p><a href={item.companyUrl}>{item.company}</a></p>
            <p>{item.description}</p>
          </article>
  }

  render(){
    const industry = this.props.industry.map((item, i) => (
      this.templateBuilder(item, i)
    ));
    const academics = this.props.academics.map((item, i) => (
      this.templateBuilder(item, i)
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
