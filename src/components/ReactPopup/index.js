import {withRouter} from 'react-router-dom'

import Popup from 'reactjs-popup'
import {FiLogOut} from 'react-icons/fi'
import 'reactjs-popup/dist/index.css'

import Cookies from 'js-cookie'

import './index.css'
import ThemeContext from '../../context/ThemeContext'

const ReactPopup = props => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const popupContainer = isDarkTheme ? 'dark-popup' : 'light-popup'
      const icon = isDarkTheme ? 'dark-icon' : 'light-icon'

      const onClickConfirm = () => {
        const {history} = props
        Cookies.remove('jwt_token')
        history.replace('/login')
      }
      return (
        <div className="popup-container">
          <Popup
            modal
            trigger={
              <button type="button" className="icon-button">
                <FiLogOut className={`icon ${icon}`} />
              </button>
            }
          >
            {close => (
              <div className={`text-container ${popupContainer}`}>
                <div className={popupContainer}>
                  <p>Are you sure, you want to logout</p>
                </div>
                <div>
                  <button
                    type="button"
                    className="button outline"
                    onClick={() => close()}
                  >
                    Cancel
                  </button>
                  <button
                    type="button"
                    className="button color"
                    onClick={onClickConfirm}
                  >
                    Confirm
                  </button>
                </div>
              </div>
            )}
          </Popup>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default withRouter(ReactPopup)
