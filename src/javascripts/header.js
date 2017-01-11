import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import logo from '../images/logo.svg';
import email from '../images/email.svg';
import linkedin from '../images/linkedin.svg';
import twitter from '../images/twitter.svg';
import github from '../images/github.svg';
import '../stylesheets/header.scss';


class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      roles: [props.role[0]],
      activeRole: 0
    };
    this.handleRole = this.handleRole.bind(this);
  }

  componentDidMount() {
    this.interval = setInterval(() => this.handleRole(), 5000);
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }

  handleRole() {
    let newItems = this.state.roles.slice();
    newItems.splice(0, 1);
    this.setState({roles: newItems});

    setTimeout(() => {
      let activeRole;
      if (this.state.activeRole === 2) {
        activeRole = 0;
      } else {
        activeRole = this.state.activeRole + 1;
      }
      newItems = this.state.roles.concat([this.props.role[activeRole]]);
      this.setState({roles: newItems, activeRole: activeRole});
    }, 1000);
  }

  render() {
    const roles = this.state.roles.map((item, i) => (
      <small key={i}>
        {item}
      </small>
    ));
    return (
      <header id="top">
        <div className="logo"><img src={logo} alt="logo" /></div>
        <div>
          <h1>
            {this.props.name}
            <br/>
            <ReactCSSTransitionGroup
             transitionName="role"
             transitionEnterTimeout={800}
             transitionLeaveTimeout={800}>
             {roles}
            </ReactCSSTransitionGroup>
          </h1>
        </div>
        <div className="social">
          <ul>
            <li><a href={this.props.twitter} target="blank"><img src={twitter} alt="twitter" /></a></li>
            <li><a href={this.props.linkedin} target="blank"><img src={linkedin} alt="linkedin" /></a></li>
            <li><a href={this.props.github} target="blank"><img src={github} alt="github" /></a></li>
            <li><a href={'mailto:' + this.props.email} target="blank"><img src={email} alt="email" /></a></li>
          </ul>
        </div>
      </header>
    );
  }
}

export default Header;
