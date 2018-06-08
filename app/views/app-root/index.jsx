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
                <span />
                <span />
                <span />
              </button>
            </div>
          </div>
        </nav>
        <div className="section">
          <div className="container">
            <div className="columns">
              {/* <div className="column is-one-quarter">
                <aside className="menu">
                  <p className="menu-label">General</p>
                  <ul className="menu-list">
                    <li>
                      <a>Dashboard</a>
                    </li>
                    <li>
                      <a>Customers</a>
                    </li>
                  </ul>
                  <p className="menu-label">Administration</p>
                  <ul className="menu-list">
                    <li>
                      <a>Team Settings</a>
                    </li>
                    <li>
                      <a className="is-active">Manage Your Team</a>
                      <ul>
                        <li>
                          <a>Members</a>
                        </li>
                        <li>
                          <a>Plugins</a>
                        </li>
                        <li>
                          <a>Add a member</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a>Invitations</a>
                    </li>
                    <li>
                      <a>Cloud Storage Environment Settings</a>
                    </li>
                    <li>
                      <a>Authentication</a>
                    </li>
                  </ul>
                  <p className="menu-label">Transactions</p>
                  <ul className="menu-list">
                    <li>
                      <a>Payments</a>
                    </li>
                    <li>
                      <a>Transfers</a>
                    </li>
                    <li>
                      <a>Balance</a>
                    </li>
                  </ul>
                </aside>
              </div> */}
              <div className="column">{children}</div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
