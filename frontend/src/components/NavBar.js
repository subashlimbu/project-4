import React from 'react'
import { Link } from 'react-router-dom'
import auth from '../lib/auth'
import { withRouter } from 'react-router-dom'

class NavBar extends React.Component {
  constructor() {
    super()
    this.state = {
      navMobileOpen: false
    }
  }

  handleLogout() {
    auth.logout()
    this.props.history.push('/')
  }

  // componentDidUpdate(prevProps) {
  //   if (this.props.location.pathname !== prevProps.location.pathname) {
  //     this.setState({ navMobileOpen: false })
  //   }
  // }

  render() {
    const isLoggedIn = auth.isLoggedIn()
    return (
      <>
        <nav className="navbar is-black">
          <div className="container navbar-container">
            <div className="navbar-brand">
              <Link id="homeBtn" className="navbar-item foodtitle" to="/">
                L.A.B.S™
              </Link>
              <a
                role="button"
                className={`navbar-burger burger ${
                  this.state.navMobileOpen ? 'is-active' : ''
                }`}
                aria-label="menu"
                aria-expanded="false"
                onClick={() =>
                  this.setState({ navMobileOpen: !this.state.navMobileOpen })
                }
              >
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
              </a>
            </div>
            <div
              className={`navbar-menu ${
                this.state.navMobileOpen ? 'is-active' : ''
              }`}
            >
              <div className="navbar-end">
                <div className="navbar-item">
                  <Link className="navbar-edited" to="/services">
                    Services
                  </Link>
                </div>

                <div className="navbar-item">
                  {isLoggedIn && (
                    <Link className="navbar-edited" to="/profile">
                      Profile
                    </Link>
                  )}
                </div>

                <div className="navbar-item">
                  {!isLoggedIn && (
                    <Link className="navbar-edited" to="/register">
                      Register
                    </Link>
                  )}
                </div>

                <div className="navbar-item">
                  {!isLoggedIn && (
                    <Link className="navbar-edited" to="/login">
                      Login
                    </Link>
                  )}
                </div>

                <div
                  onClick={() => this.handleLogout()}
                  className="navbar-item"
                >
                  {isLoggedIn && <Link className="navbar-edited">Log out</Link>}
                </div>

                <div className="navbar-item has-dropdown is-hoverable navbar-name">
                  <div className="navbar-dropdown">
                    <div className="navbar-edited"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </>
    )
  }
}

export default withRouter(NavBar)
// will need to be withRouter in future
