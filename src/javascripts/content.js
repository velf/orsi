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
{/*
        <article>
          <div className="title-stripe">
            <h2>Skills</h2>
            <div></div>
          </div>
          <Graph />
        </article> */}
      </main>
      );
  }

}

export default Content;
