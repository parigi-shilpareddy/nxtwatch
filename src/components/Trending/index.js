import {Component} from 'react'
import Cookies from 'js-cookie'

import {HiFire} from 'react-icons/hi'

import Loader from 'react-loader-spinner'

import ThemeContext from '../../context/ThemeContext'

import TrendingCard from '../TrendingCard'

import {
  TrendingContainer,
  SidebarTrendingContainer,
  HeadingLogoContainer,
  Heading,
  LogoContainer,
  LoaderContainer,
  FailureHeading,
  FailurePara,
  FailureHomeImageContainer,
  RetryButton,
  TrendingVideoContainer,
} from './styledComponents'
import Header from '../Header'
import SideBar from '../SideBar'

const apiStatusConstants = {
  initial: 'INITIAL',
  inProgress: 'IN_PROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class Trending extends Component {
  state = {trendingVideosList: [], apiStatus: apiStatusConstants.initial}

  componentDidMount() {
    this.getTrendingVideosDetails()
  }

  getTrendingVideosDetails = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const url = 'https://apis.ccbp.in/videos/trending'
    const jwtToken = Cookies.get('jwt_token')
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(url, options)
    if (response.ok) {
      const data = await response.json()
      const updatedTrendingList = data.videos.map(each => ({
        channelName: each.channel.name,
        profileImageUrl: each.channel.profile_image_url,
        id: each.id,
        publishedAt: each.published_at,
        thumbnailUrl: each.thumbnail_url,
        title: each.title,
        viewCount: each.view_count,
      }))
      this.setState({
        trendingVideosList: updatedTrendingList,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({
        apiStatus: apiStatusConstants.failure,
      })
    }
  }

  renderLoadingView = () => (
    <ThemeContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        const {display} = this.props
        const color = isDarkTheme ? '#0b69ff' : '#ffffff'
        return (
          <LoaderContainer
            height={display === 'flex' ? '47vh' : '76vh'}
            data-testid="loader"
          >
            <Loader type="ThreeDots" color={color} height="50" width="50" />
          </LoaderContainer>
        )
      }}
    </ThemeContext.Consumer>
  )

  onClickRetryButton = () => {
    this.getTrendingVideosDetails()
  }

  renderFailureView = () => (
    <ThemeContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        const {display} = this.props
        const failureUrl = isDarkTheme
          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
        const color = isDarkTheme ? '#ffffff' : '#314154'
        return (
          <LoaderContainer height={display === 'flex' ? '47vh' : '76vh'}>
            <FailureHomeImageContainer src={failureUrl} alt="failure view" />
            <FailureHeading color={color}>
              Oops! Something Went Wrong
            </FailureHeading>
            <FailurePara>
              We are having some trouble to complete your request. Please try
              again.
            </FailurePara>
            <RetryButton type="button" onClick={this.onClickRetryButton}>
              Retry
            </RetryButton>
          </LoaderContainer>
        )
      }}
    </ThemeContext.Consumer>
  )

  renderSuccessTrendingView = () => {
    const {trendingVideosList} = this.state

    return (
      <TrendingVideoContainer>
        {trendingVideosList.map(each => (
          <TrendingCard key={each.id} details={each} />
        ))}
      </TrendingVideoContainer>
    )
  }

  renderTrendingVideos = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.inProgress:
        return this.renderLoadingView()
      case apiStatusConstants.success:
        return this.renderSuccessTrendingView()
      case apiStatusConstants.failure:
        return this.renderFailureView()
      default:
        return null
    }
  }

  render() {
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          const trendingBgColor = isDarkTheme ? '#0f0f0f' : '#f9f9f9'
          const bgColor = isDarkTheme ? '#181818' : '#f1f1f1'
          return (
            <TrendingContainer
              trendingBgColor={trendingBgColor}
              data-testid="trending"
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
                      Trending
                    </Heading>
                  </HeadingLogoContainer>
                  {this.renderTrendingVideos()}
                </div>
              </SidebarTrendingContainer>
            </TrendingContainer>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default Trending
