import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container">

        <header className="header">
          <section className="logo"><img src={logo} alt="logo" /></section>
          <section className="main">
            <p className="title">Orsi Vasarhelyi</p>
            <p className="subtitle">Data science</p>
          </section>
        </header>

        <article>
          <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>
        </article>

        <aside className="aside aside-1">
          <p>Aside 1</p>
        </aside>

        <aside className="aside aside-2">
          <p>Aside 2</p>
        </aside>
        
        <footer>Footer</footer>
      </div>
    );
  }
}

export default App;
