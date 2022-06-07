import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const VideoCardContainer = styled.div`
  width: 25vw;
  height: auto;
  margin: 55px;
  @media screen (max-width: 991px) {
    width: 300px;
  }
  @media screen and (max-width: 576px) {
    width: 100vw;
    margin: 10px;
  }
  @media screen and (min-width: 992px) {
    margin: 10px;
  }
`
export const VideoCardImage = styled.img`
  width: 25vw;
  height: 23vh;
  @media screen and (max-width: 991px) {
    width: 300px;
  }
`
export const VideoDetailsContainer = styled.div`
  display: flex;
  margin-top: 8px;
`
export const VideoProfileImage = styled.img`
  width: 35px;
  height: 35px;
  margin-top: 5px;
  margin-right: 5px;
`
export const VideoTextDetailsContainer = styled.div`
  margin-left: 5px;
`
export const VideoTitle = styled.p`
  font-size: 15px;
  font-family: 'Roboto';
  color: ${props => props.titleColor};
  margin: 4px;
`
export const VideoChannel = styled.p`
  font-size: 15px;
  color: ${props => props.color};
  font-family: 'Roboto';
  margin: 6px;
  font-weight: 400;
`
export const VideoLikesContainer = styled.div`
  display: flex;
`
export const HomeCardLink = styled(Link)`
  text-decoration: none;
`
