import ThemeContext from '../../context/ThemeContext'
import {
  GamingCardContainer,
  GamingThumbnailImage,
  GamingCardHeading,
  ViewCount,
  GamingCardLink,
} from './styledComponents'

const GamingCard = props => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const {details} = props
      const {thumbnailUrl, title, viewCount, id} = details
      return (
        <GamingCardLink to={`/videos/${id}`}>
          <GamingCardContainer>
            <GamingThumbnailImage src={thumbnailUrl} alt="video thumbnail" />
            <GamingCardHeading color={isDarkTheme ? '#ffffff' : '#1c293a'}>
              {title}
            </GamingCardHeading>
            <ViewCount color={isDarkTheme ? '#616e7c' : '#616e7c'}>
              {viewCount} Watching Worldwide
            </ViewCount>
          </GamingCardContainer>
        </GamingCardLink>
      )
    }}
  </ThemeContext.Consumer>
)

export default GamingCard
