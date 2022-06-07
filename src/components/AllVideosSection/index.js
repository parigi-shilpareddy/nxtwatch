import {Component} from 'react'

import Cookies from 'js-cookie'

import Loader from 'react-loader-spinner'

import {AiOutlineSearch} from 'react-icons/ai'

import HomeCard from '../HomeCard'
import ThemeContext from '../../context/ThemeContext'
import {
  LoaderContainer,
  FailureHomeImageContainer,
  FailureHeading,
  FailurePara,
  RetryButton,
  InputContainer,
  InputElement,
  SuccessContainer,
  IconContainer,
  VideosContainer,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  inProgress: 'IN_PROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class AllVideosSection extends Component {
  state = {
    videosList: [],
    apiStatus: apiStatusConstants.initial,
    searchInput: '',
  }

  componentDidMount() {
    this.getVideosDetails()
  }

  getVideosDetails = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const {searchInput} = this.state
    const url = `https://apis.ccbp.in/videos/all?search=${searchInput}`
    const jwtToken = Cookies.get('jwt_token')
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(url, options)
    console.log(response)
    if (response.ok) {
      const data = await response.json()
      const updatedVideoList = data.videos.map(each => ({
        channelName: each.channel.name,
        profileImageUrl: each.channel.profile_image_url,
        id: each.id,
        publishedAt: each.published_at,
        thumbnailUrl: each.thumbnail_url,
        title: each.title,
        viewCount: each.view_count,
      }))
      this.setState({
        videosList: updatedVideoList,
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
            height={display === false ? '47vh' : '76vh'}
            data-testid="loader"
          >
            <Loader type="ThreeDots" color={color} height="50" width="50" />
          </LoaderContainer>
        )
      }}
    </ThemeContext.Consumer>
  )

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  onEnterKey = event => {
    if (event.key === 'Enter') {
      this.getVideosDetails()
    }
  }

  onClickRetryButton = () => {
    this.getVideosDetails()
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

  renderNoSearchResults = () => (
    <ThemeContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        const {display} = this.props
        const color = isDarkTheme ? '#ffffff' : '#314154'
        return (
          <LoaderContainer height={display === false ? '47vh' : '76vh'}>
            <FailureHomeImageContainer
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
              alt="no videos"
            />
            <FailureHeading color={color}>
              No Search results found
            </FailureHeading>
            <FailurePara>
              Try different key words or remove search filter.
            </FailurePara>
            <RetryButton>Retry</RetryButton>
          </LoaderContainer>
        )
      }}
    </ThemeContext.Consumer>
  )

  renderSuccessVideoView = () => {
    const {videosList} = this.state
    const {display} = this.props
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          const {searchInput} = this.state
          const inputColor = isDarkTheme ? '#ffffff' : '#314154'
          const bgIconColor = isDarkTheme ? '#313031' : '#f4f4f4'
          const VideoListLength = videosList.length > 0

          return (
            <SuccessContainer>
              <InputContainer>
                <InputElement
                  type="search"
                  inputColor={inputColor}
                  placeholder="Search"
                  value={searchInput}
                  onChange={this.onChangeSearchInput}
                  onKeyDown={this.onEnterKey}
                />
                <IconContainer
                  bgIconColor={bgIconColor}
                  type="button"
                  data-testid="searchButton"
                  onClick={this.getVideosDetails}
                >
                  <AiOutlineSearch size={15} color="#8d898d" />
                </IconContainer>
              </InputContainer>
              {VideoListLength ? (
                <VideosContainer height={display === false ? '47vh' : '72vh'}>
                  {videosList.map(each => (
                    <HomeCard key={each.id} videoDetails={each} />
                  ))}
                </VideosContainer>
              ) : (
                this.renderNoSearchResults()
              )}
            </SuccessContainer>
          )
        }}
      </ThemeContext.Consumer>
    )
  }

  render() {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.inProgress:
        return this.renderLoadingView()
      case apiStatusConstants.success:
        return this.renderSuccessVideoView()
      case apiStatusConstants.failure:
        return this.renderFailureView()
      default:
        return null
    }
  }
}

export default AllVideosSection
