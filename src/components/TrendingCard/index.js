import {
  TrendingCardContainer,
  ThumbnailImage,
  CardHeading,
  ChannelName,
  TrendingCardLink,
} from './styledComponents'
import ThemeContext from '../../context/ThemeContext'

const TrendingCard = props => {
  const {details} = props
  const {thumbnailUrl, title, channelName, viewCount, publishedAt, id} = details
  return (
    <ThemeContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        return (
          <TrendingCardLink to={`/videos/${id}`}>
            <TrendingCardContainer>
              <ThumbnailImage src={thumbnailUrl} alt="video thumbnail" />
              <div>
                <CardHeading color={isDarkTheme ? '#ffffff' : '#1c293a'}>
                  {title}
                </CardHeading>
                <ChannelName color={isDarkTheme ? '#616e7c' : '#616e7c'}>
                  {channelName}
                </ChannelName>
                <ChannelName color={isDarkTheme ? '#616e7c' : '#616e7c'}>
                  {viewCount} views
                </ChannelName>
                <ChannelName color={isDarkTheme ? '#616e7c' : '#616e7c'}>
                  {publishedAt}
                </ChannelName>
              </div>
            </TrendingCardContainer>
          </TrendingCardLink>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default TrendingCard
