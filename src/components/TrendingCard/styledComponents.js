import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const TrendingCardContainer = styled.li`
  display: flex;
  margin: 20px;
  width: 82vw;
  margin-bottom: 30px;
  @media screen and (max-width: 991px) {
    width: 100vw;
  }
`
export const ThumbnailImage = styled.img`
  width: 30vw;
  height: 25vh;
  margin-right: 20px;
`
export const CardHeading = styled.p`
  font-size: 16px;
  font-family: 'Roboto';
  color: ${props => props.color};
`
export const ChannelName = styled.p`
  font-size: 13px;
  font-family: 'Roboto';
  color: ${props => props.color};
`
export const TrendingCardLink = styled(Link)`
  text-decoration: none;
`
