import {HiFire} from 'react-icons/hi'

import ThemeContext from '../../context/ThemeContext'

import TrendingCard from '../TrendingCard'

import {
  TrendingContainer,
  SidebarTrendingContainer,
  HeadingLogoContainer,
  Heading,
  LogoContainer,
  TrendingVideoContainer,
  NoSavedContainer,
  NoHeading,
  NoPara,
  NoSavedImage,
} from './styledComponents'
import Header from '../Header'
import SideBar from '../SideBar'

const SavedVideos = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme, savedVideos} = value
      const trendingBgColor = isDarkTheme ? '#0f0f0f' : '#f9f9f9'
      const bgColor = isDarkTheme ? '#181818' : '#f1f1f1'
      const color = isDarkTheme ? '#ffffff' : '#314154'
      const SavedVideosLength = savedVideos.length

      return (
        <TrendingContainer
          trendingBgColor={trendingBgColor}
          data-testid="savedVideos"
        >
          <Header />
          <SidebarTrendingContainer>
            <SideBar />
            <div>
              <HeadingLogoContainer bgColor={bgColor}>
                <LogoContainer
                  logoContainerColor={isDarkTheme ? '#0f0f0f' : '#e1e9f0'}
                >
                  <HiFire />
                </LogoContainer>
                <Heading color={isDarkTheme ? '#ffffff' : '#1c293a'}>
                  Saved Videos
                </Heading>
              </HeadingLogoContainer>
              {SavedVideosLength > 0 ? (
                <TrendingVideoContainer>
                  {savedVideos.map(each => (
                    <TrendingCard key={each.id} details={each} />
                  ))}
                </TrendingVideoContainer>
              ) : (
                <NoSavedContainer>
                  <NoSavedImage
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
                    alt="no saved videos"
                  />
                  <NoHeading color={color}>No Saved Videos found</NoHeading>
                  <NoPara>You can save your videos while watching them</NoPara>
                </NoSavedContainer>
              )}
            </div>
          </SidebarTrendingContainer>
        </TrendingContainer>
      )
    }}
  </ThemeContext.Consumer>
)

export default SavedVideos
