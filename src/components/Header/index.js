import './index.css'
import {withRouter, Link} from 'react-router-dom'
import Popup from 'reactjs-popup'
import {GiHamburgerMenu} from 'react-icons/gi'
import 'reactjs-popup/dist/index.css'

import {FaMoon} from 'react-icons/fa'

import {FiSun} from 'react-icons/fi'

import ThemeContext from '../../context/ThemeContext'
import ReactPopup from '../ReactPopup'

const Header = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme, toggleTheme} = value
      const navbarContainer = isDarkTheme ? 'dark-navbar' : 'light-navbar'
      const logoUrl = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
      const icon = isDarkTheme ? 'dark-icon' : 'light-icon'

      const onClickThemeButton = () => {
        toggleTheme()
      }

      return (
        <nav className={`navbar-container ${navbarContainer}`}>
          <Link to="/">
            <img src={logoUrl} className="logo-url" alt="website logo" />
          </Link>
          <div className="icons-container">
            <button
              type="button"
              className="theme-button"
              data-testid="theme"
              onClick={onClickThemeButton}
            >
              {isDarkTheme ? (
                <FiSun className="sun" />
              ) : (
                <FaMoon className="moon" />
              )}
            </button>
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
              alt="profile"
              className="profile"
            />
            <div className="ham-popup-container">
              <Popup
                trigger={
                  <button type="button" className="icon-button">
                    <GiHamburgerMenu className={`icon ${icon}`} />
                  </button>
                }
              >
                <div>
                  <Link to="/">
                    <li>Home</li>
                  </Link>
                  <Link to="/trending">
                    <li>Trending</li>
                  </Link>
                  <Link to="/gaming">
                    <li>Gaming</li>
                  </Link>
                  <Link to="/saved-videos">
                    <li>Saved Videos</li>
                  </Link>
                </div>
              </Popup>
            </div>
            <ReactPopup />
          </div>
        </nav>
      )
    }}
  </ThemeContext.Consumer>
)

export default withRouter(Header)
