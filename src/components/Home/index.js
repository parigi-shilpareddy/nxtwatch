import {Component} from 'react'

import {GrFormClose} from 'react-icons/gr'

import AllVideosSection from '../AllVideosSection'

import Header from '../Header'

import SideBar from '../SideBar'

import ThemeContext from '../../context/ThemeContext'
import {
  HomeContainer,
  BannerContainer,
  SidebarBannerContainer,
  BannerTextContainer,
  BannerLogo,
  BannerText,
  BannerButton,
  CloseButton,
  CloseButtonContainer,
} from './styledComponents'

class Home extends Component {
  state = {isClose: false}

  onClickBannerCloseButton = () => {
    this.setState({isClose: true})
  }

  render() {
    const {isClose} = this.state
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          const homeBgColor = isDarkTheme ? '#181818' : '#f9f9f9'
          return (
            <HomeContainer homeBgColor={homeBgColor} data-testid="home">
              <Header />
              <SidebarBannerContainer>
                <SideBar />
                <div>
                  {isClose ? (
                    <AllVideosSection />
                  ) : (
                    <>
                      <BannerContainer data-testid="banner">
                        <BannerTextContainer>
                          <BannerLogo
                            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                            alt="nxt watch logo"
                          />
                          <BannerText>
                            Buy Nxt Watch Premium prepaid plans with UPI
                          </BannerText>
                          <BannerButton>GET IT NOW</BannerButton>
                        </BannerTextContainer>
                        <CloseButtonContainer>
                          <CloseButton
                            type="button"
                            onClick={this.onClickBannerCloseButton}
                            data-testid="close"
                          >
                            <GrFormClose size={20} />
                          </CloseButton>
                        </CloseButtonContainer>
                      </BannerContainer>
                      <AllVideosSection display={isClose} />
                    </>
                  )}
                </div>
              </SidebarBannerContainer>
            </HomeContainer>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default Home
