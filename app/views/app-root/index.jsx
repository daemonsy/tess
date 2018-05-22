import React from 'react';

export default class AppRoot extends React.Component {
  render() {
    const { children } = this.props;

    return (
      <React.Fragment>
        <nav className="navbar" role="navigation" aria-label="main navigation">
          <div className="container">
            <div className="navbar-brand">
              <a className="navbar-item" href="#">
                Everest
              </a>
              <button className="button navbar-burger">
                <span></span>
                <span></span>
                <span></span>
              </button>
            </div>
          </div>
        </nav>
        <div className="section">
          <div className="container">
            {children}
          </div>
        </div>
      </React.Fragment>
    );
  }
}
