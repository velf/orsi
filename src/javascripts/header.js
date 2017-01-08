import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import logo from '../images/logo.svg';
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
      <header>
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
      </header>
    );
  }
}

export default Header;
