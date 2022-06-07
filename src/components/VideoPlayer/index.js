import {Component} from 'react'
import Cookies from 'js-cookie'

import Loader from 'react-loader-spinner'
import ReactPlayer from 'react-player'
import {AiOutlineLike, AiOutlineDislike} from 'react-icons/ai'
import {BiListPlus} from 'react-icons/bi'

import Header from '../Header'
import SideBar from '../SideBar'

import ThemeContext from '../../context/ThemeContext'

import {
  VideoContainer,
  SidebarVideoContainer,
  LoaderContainer,
  FailureHeading,
  FailureHomeImageContainer,
  FailurePara,
  RetryButton,
  SuccessContainer,
  ReactPlayerContainer,
  VideoPlayerPara,
  VideoPlayerHeading,
  LikesSavedButtonContainer,
  CustomButton,
  ButtonText,
  Line,
  ChannelContainer,
  ChannelVideoProfileImage,
  ChannelName,
  Subscriber,
  ChannelSubscriberContainer,
  Description,
} from './styledComponents'
import {ButtonsContainer} from '../Trending/styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  inProgress: 'IN_PROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class VideoPlayer extends Component {
  state = {
    videoDetails: {},
    apiStatus: apiStatusConstants.initial,
    like: false,
    dislike: false,
  }

  componentDidMount() {
    this.getEachVideoDetails()
  }

  getEachVideoDetails = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const {match} = this.props
    const {params} = match
    const {id} = params
    const url = `https://apis.ccbp.in/videos/${id}`
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
      console.log(data)
      const updatedVideoList = {
        channelName: data.video_details.channel.name,
        profileImageUrl: data.video_details.channel.profile_image_url,
        subscriberCount: data.video_details.channel.subscriber_count,
        description: data.video_details.description,
        videoUrl: data.video_details.video_url,
        id: data.video_details.id,
        publishedAt: data.video_details.published_at,
        thumbnailUrl: data.video_details.thumbnail_url,
        title: data.video_details.title,
        viewCount: data.video_details.view_count,
      }
      this.setState({
        videoDetails: updatedVideoList,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
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
    this.getEachVideoDetails()
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
          <LoaderContainer height={display === false ? '47vh' : '76vh'}>
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

  onClickLikeButton = () => {
    this.setState(prevState => ({
      like: !prevState.like,
      dislike: false,
    }))
  }

  onClickDislikeButton = () => {
    this.setState(prevState => ({
      dislike: !prevState.dislike,
      like: false,
    }))
  }

  renderSuccessVideoPlayerView = () => (
    <ThemeContext.Consumer>
      {value => {
        const {isDarkTheme, addVideo, savedVideos, deleteVideo} = value
        const {videoDetails, like, dislike} = this.state
        const {
          videoUrl,
          title,
          viewCount,
          publishedAt,
          profileImageUrl,
          channelName,
          subscriberCount,
          description,
          id,
        } = videoDetails
        const likeColor = like ? '#2563eb' : '#64748b'
        const dislikeColor = dislike ? '#2563eb' : '#64748b'
        let isSaved
        const index = savedVideos.findIndex(
          eachVideo => eachVideo.id === videoDetails.id,
        )
        if (index === -1) {
          isSaved = false
        } else {
          isSaved = true
        }
        const isSavedColor = isSaved ? '#2563eb' : '#64748b'

        const onClickSave = () => {
          if (isSaved === false) {
            addVideo(videoDetails)
          } else {
            deleteVideo(videoDetails.id)
          }
        }

        return (
          <SuccessContainer>
            <ReactPlayerContainer>
              <ReactPlayer url={videoUrl} width="100%" height={300} />
            </ReactPlayerContainer>
            <VideoPlayerHeading color={isDarkTheme ? '#ffffff' : '#44566f'}>
              {title}
            </VideoPlayerHeading>
            <LikesSavedButtonContainer>
              <VideoPlayerPara color={isDarkTheme ? '#445366' : '#7790ab'}>
                {viewCount} views . {publishedAt}
              </VideoPlayerPara>
              <ButtonsContainer>
                <CustomButton type="button" onClick={this.onClickLikeButton}>
                  <AiOutlineLike size={20} color={likeColor} />
                  <ButtonText buttonColor={likeColor}>Like</ButtonText>
                </CustomButton>
                <CustomButton type="button" onClick={this.onClickDislikeButton}>
                  <AiOutlineDislike size={20} color={dislikeColor} />
                  <ButtonText buttonColor={dislikeColor}>Dislike</ButtonText>
                </CustomButton>
                <CustomButton type="button" onClick={onClickSave} key={id}>
                  <BiListPlus size={20} color={isSavedColor} />
                  <ButtonText buttonColor={isSavedColor}>
                    {isSaved ? 'Saved' : 'Save'}
                  </ButtonText>
                </CustomButton>
              </ButtonsContainer>
            </LikesSavedButtonContainer>
            <Line lineColor={isDarkTheme ? '#445366' : '#7790ab'} />
            <ChannelContainer>
              <ChannelVideoProfileImage
                src={profileImageUrl}
                alt="channel logo"
              />
              <ChannelSubscriberContainer>
                <ChannelName color={isDarkTheme ? '#ffffff' : '#445366'}>
                  {channelName}
                </ChannelName>
                <Subscriber color={isDarkTheme ? '#445366' : '#7790ab'}>
                  {subscriberCount} subscribers
                </Subscriber>
                <Description color={isDarkTheme ? '#ffffff' : '#44566f'}>
                  {description}
                </Description>
              </ChannelSubscriberContainer>
            </ChannelContainer>
          </SuccessContainer>
        )
      }}
    </ThemeContext.Consumer>
  )

  renderVideoPlayer = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.inProgress:
        return this.renderLoadingView()
      case apiStatusConstants.success:
        return this.renderSuccessVideoPlayerView()
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
          return (
            <VideoContainer
              videoBgColor={isDarkTheme ? '#0f0f0f' : '#f9f9f9'}
              data-testid="videoItemDetails"
            >
              <Header />
              <SidebarVideoContainer>
                <SideBar />
                {this.renderVideoPlayer()}
              </SidebarVideoContainer>
            </VideoContainer>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default VideoPlayer
