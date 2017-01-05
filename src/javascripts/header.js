import React from 'react';
import logo from '../images/logo.svg';
import '../stylesheets/header.scss';

const Header = (props) => {
  return (
    <header className="header">
      <section className="logo"><img src={logo} alt="logo" /></section>
      <section className="main">
        <p className="title">Orsi Vasarhelyi</p>
        <p className="subtitle">Data science</p>
      </section>
    </header>
    );
}

export default Header;
