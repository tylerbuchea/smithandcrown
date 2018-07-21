import React from 'react';

export default class Nav extends React.PureComponent {
  render() {
    return (
      <nav className="navbar has-shadow is-spaced">
        <div className="navbar-brand">
          <a className="navbar-item" href="https://smithandcrown.com/">
            <img
              alt="logo"
              src="/favicon.png"
            />
          </a>
        </div>
      </nav>
    );
  }
}
