import styled from 'styled-components'

export const TrendingContainer = styled.div`
  background-color: ${props => props.trendingBgColor};
  height: 100vh;
`
export const SidebarTrendingContainer = styled.div`
  display: flex;
  flex-direction: row;
`
export const HeadingLogoContainer = styled.div`
  background-color: ${props => props.bgColor};
  height: 15vh;
  width: 84vw;
  display: flex;
  padding: 20px;
  padding-left: 30px;
  @media screen and (max-width: 991px) {
    width: 100vw;
  }
`
export const LogoContainer = styled.div`
  background-color: ${props => props.logoContainerColor};
  height: 55px;
  width: 55px;
  border-radius: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  color: #ff0000;
`
export const Heading = styled.h1`
  font-size: 34px;
  color: ${props => props.color};
  font-weight: 500;
  font-family: 'Roboto';
  margin: 0px;
  margin-top: 8px;
  margin-left: 15px;
`
export const TrendingVideoContainer = styled.ul`
  list-style-type: none;
  margin: 0px;
  padding: 0px;
  height: 72vh;
  overflow-y: auto;
`
export const NoSavedContainer = styled.div`
  height: 85vh;
  width: 80vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const NoSavedImage = styled.img`
  height: 40vh;
  width: 35vw;
`

export const NoHeading = styled.h1`
  font-size: 20px;
  font-family: 'Roboto';
  font-weight: 500;
  color: ${props => props.color};
  margin: 0px;
`
export const NoPara = styled.p`
  color: #4f728f;
  font-size: 15px;
  font-family: 'Roboto';
`
