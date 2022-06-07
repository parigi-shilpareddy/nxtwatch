import {Component} from 'react'

import {Redirect} from 'react-router-dom'

import Cookies from 'js-cookie'

import ThemeContext from '../../context/ThemeContext'

import './index.css'
import {LoginButton} from './styledComponents'

class LoginForm extends Component {
  state = {
    typeActive: false,
    username: '',
    password: '',
    showError: false,
    errorMsg: '',
  }

  onSubmitSuccess = jwtToken => {
    const {history} = this.props

    Cookies.set('jwt_token', jwtToken, {expires: 30})
    history.replace('/')
  }

  onSubmitFailure = errorMsg => {
    this.setState({showError: true, errorMsg})
  }

  onSubmitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    console.log(data)
    if (response.ok) {
      this.onSubmitSuccess(data.jwt_token)
    } else {
      this.onSubmitFailure(data.error_msg)
    }
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePasswordType = () => {
    this.setState(prevState => ({
      typeActive: !prevState.typeActive,
    }))
  }

  render() {
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          const {
            typeActive,
            username,
            password,
            showError,
            errorMsg,
          } = this.state
          const loginContainer = isDarkTheme
            ? 'dark-container'
            : 'light-container'
          const formContainer = isDarkTheme
            ? 'dark-form-container'
            : 'light-form-container'
          const logoUrl = isDarkTheme
            ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
          const label = isDarkTheme ? 'dark-label' : 'light-label'
          const input = isDarkTheme ? 'dark-label' : 'light-input'
          const passwordType = typeActive ? 'text' : 'password'
          const jwtToken = Cookies.get('jwt_token')
          if (jwtToken !== undefined) {
            return <Redirect to="/" />
          }
          return (
            <div className={`login-container ${loginContainer}`}>
              <form
                className={`form-container ${formContainer}`}
                onSubmit={this.onSubmitForm}
              >
                <img src={logoUrl} alt="website logo" className="logo" />
                <div className="input-container">
                  <label htmlFor="username" className={`label ${label}`}>
                    USERNAME
                  </label>
                  <input
                    className={`input ${input}`}
                    type="text"
                    id="username"
                    value={username}
                    placeholder="Username"
                    onChange={this.onChangeUsername}
                  />
                </div>
                <div className="input-container">
                  <label htmlFor="password" className={`label ${label}`}>
                    PASSWORD
                  </label>
                  <input
                    className={`input ${input}`}
                    type={passwordType}
                    id="password"
                    value={password}
                    placeholder="Password"
                    onChange={this.onChangePassword}
                  />
                </div>
                <div className="check-container">
                  <input
                    type="checkbox"
                    id="checkbox"
                    className="checkbox"
                    onChange={this.onChangePasswordType}
                  />
                  <label htmlFor="checkbox" className={`check-label ${input}`}>
                    Show Password
                  </label>
                </div>
                <LoginButton type="submit">Login</LoginButton>
                {showError && <p className="error">*{errorMsg}</p>}
              </form>
            </div>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default LoginForm
