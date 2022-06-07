import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const GamingCardContainer = styled.li`
  margin: 20px;
  width: 17vw;
  margin-bottom: 0px;
  @media screen and (max-width: 991px) {
    width: 33vw;
  }
`
export const GamingThumbnailImage = styled.img`
  width: 17vw;
  height: 43vh;
  margin-right: 5px;
  @media screen and (max-width: 991px) {
    width: 33vw;
  }
`
export const GamingCardHeading = styled.p`
  font-size: 16px;
  font-family: 'Roboto';
  color: ${props => props.color};
`
export const ViewCount = styled.p`
  font-size: 13px;
  font-family: 'Roboto';
  color: ${props => props.color};
`
export const GamingCardLink = styled(Link)`
  text-decoration: none;
`
