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
          <div className="title-stripe">
            <h2 id="industry">Industry</h2>
            <div></div>
          </div>
          {industry}
          <div className="title-stripe">
            <h2 id="academics">Academics</h2>
            <div></div>
          </div>
          {academics}
        </article>

        <aside>
          <div className="title-stripe">
            <h2>Social graph</h2>
            <div></div>
          </div>
          <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>
        </aside>

      </main>
      );
  }

}

export default Content;
