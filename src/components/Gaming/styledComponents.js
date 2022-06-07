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
export const LoaderContainer = styled.div`
  height: ${props => props.height};
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 84vw;
  align-items: center;
`
export const FailureHomeImageContainer = styled.img`
  width: 30vw;
  height: 22vh;
  margin-bottom: 10px;
`
export const FailureHeading = styled.h1`
  font-size: 20px;
  font-family: 'Roboto';
  font-weight: 500;
  color: ${props => props.color};
  margin: 0px;
`
export const FailurePara = styled.p`
  color: #4f728f;
  font-size: 15px;
  font-family: 'Roboto';
`
export const RetryButton = styled.button`
  background-color: #4a47e0;
  color: #ffffff;
  border-width: 0px;
  border-radius: 4px;
  padding: 10px;
  padding-left: 20px;
  padding-right: 20px;
  font-size: 14px;
  font-family: 'Roboto';
`
export const TrendingVideoContainer = styled.ul`
  list-style-type: none;
  margin: 0px;
  padding: 0px;
  height: 72vh;
  overflow-y: auto;
  display: flex;
  flex-wrap: wrap;
`
