import ThemeContext from '../../context/ThemeContext'

import {
  VideoCardContainer,
  VideoCardImage,
  VideoDetailsContainer,
  VideoProfileImage,
  VideoTextDetailsContainer,
  VideoTitle,
  VideoChannel,
  VideoLikesContainer,
  HomeCardLink,
} from './styledComponents'

const HomeCard = props => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const {videoDetails} = props
      const {
        thumbnailUrl,
        profileImageUrl,
        title,
        channelName,
        viewCount,
        publishedAt,
        id,
      } = videoDetails
      const titleColor = isDarkTheme ? '#ffffff' : '#314154'
      const color = isDarkTheme ? '#466282' : '#556a7b'
      return (
        <HomeCardLink to={`/videos/${id}`}>
          <VideoCardContainer>
            <VideoCardImage src={thumbnailUrl} alt="video thumbnail" />
            <VideoDetailsContainer>
              <VideoProfileImage src={profileImageUrl} alt="channel logo" />
              <VideoTextDetailsContainer>
                <VideoTitle titleColor={titleColor}>{title}</VideoTitle>
                <VideoChannel color={color}>{channelName}</VideoChannel>
                <VideoLikesContainer>
                  <VideoChannel color={color}>{viewCount} views </VideoChannel>
                  <VideoChannel color={color}>{publishedAt}</VideoChannel>
                </VideoLikesContainer>
              </VideoTextDetailsContainer>
            </VideoDetailsContainer>
          </VideoCardContainer>
        </HomeCardLink>
      )
    }}
  </ThemeContext.Consumer>
)

export default HomeCard
