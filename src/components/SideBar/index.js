import {AiFillHome} from 'react-icons/ai'
import {HiFire} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'
import {BiListPlus} from 'react-icons/bi'

import ThemeContext from '../../context/ThemeContext'

import {
  NavLinkContainer,
  NavText,
  NavLink,
  NavContainer,
  NavItemsContainer,
  ContactInfoContainer,
  ContactHeading,
  SocialMedia,
  SocialImage,
  ContactText,
} from './styledComponents'

const SideBar = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme, activeTab, changeTab} = value
      console.log(activeTab)
      const color = isDarkTheme ? '#ffffff' : '#40434d'
      const activeBgColor = isDarkTheme ? '#383838' : '#d9e3ed'
      const activeColor = isDarkTheme ? '#ffffff' : '#000000'
      const bgColor = isDarkTheme ? '#212121' : '#ffffff'

      const onClickHomeTab = () => {
        changeTab('Home')
      }

      const onClickTrendingTab = () => {
        changeTab('Trending')
      }

      const onClickGamingTab = () => {
        changeTab('Gaming')
      }

      const onClickSavedTab = () => {
        changeTab('Saved')
      }

      return (
        <NavContainer bgColor={bgColor}>
          <NavItemsContainer>
            <NavLink to="/">
              <NavLinkContainer
                bgColor={activeTab === 'Home' ? activeBgColor : null}
                key="home"
                onClick={onClickHomeTab}
              >
                <AiFillHome
                  color={activeTab === 'Home' ? '#ff0000' : '#918e90'}
                  size={20}
                />
                <NavText color={activeTab === 'Home' ? activeColor : color}>
                  Home
                </NavText>
              </NavLinkContainer>
            </NavLink>
            <NavLink to="/trending">
              <NavLinkContainer
                bgColor={activeTab === 'Trending' ? activeBgColor : null}
                key="trending"
                onClick={onClickTrendingTab}
              >
                <HiFire
                  color={activeTab === 'Trending' ? '#ff0000' : '#918e90'}
                  size={20}
                />
                <NavText color={activeTab === 'Trending' ? activeColor : color}>
                  Trending
                </NavText>
              </NavLinkContainer>
            </NavLink>
            <NavLink to="/gaming">
              <NavLinkContainer
                bgColor={activeTab === 'Gaming' ? activeBgColor : null}
                key="gaming"
                onClick={onClickGamingTab}
              >
                <SiYoutubegaming
                  color={activeTab === 'Gaming' ? '#ff0000' : '#918e90'}
                  size={20}
                />
                <NavText color={activeTab === 'Gaming' ? activeColor : color}>
                  Gaming
                </NavText>
              </NavLinkContainer>
            </NavLink>
            <NavLink to="/saved-videos">
              <NavLinkContainer
                bgColor={activeTab === 'Saved' ? activeBgColor : null}
                key="saved"
                onClick={onClickSavedTab}
              >
                <BiListPlus
                  color={activeTab === 'Saved' ? '#ff0000' : '#918e90'}
                  size={20}
                />
                <NavText color={activeTab === 'Saved' ? activeColor : color}>
                  Saved videos
                </NavText>
              </NavLinkContainer>
            </NavLink>
          </NavItemsContainer>
          <ContactInfoContainer>
            <ContactHeading color={color}>CONTACT US</ContactHeading>
            <SocialMedia>
              <SocialImage
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                alt="facebook logo"
              />
              <SocialImage
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                alt="twitter logo"
              />
              <SocialImage
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                alt="linked in logo"
              />
            </SocialMedia>
            <ContactText color={color}>
              Enjoy! Now to see your channels and recommendations!
            </ContactText>
          </ContactInfoContainer>
        </NavContainer>
      )
    }}
  </ThemeContext.Consumer>
)

export default SideBar
