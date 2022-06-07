import styled from 'styled-components'

export const HomeContainer = styled.div`
  background-color: ${props => props.homeBgColor};
  height: 100vh;
`

export const BannerContainer = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  background-size: cover;
  height: 33vh;
  width: 84vw;
  padding: 20px;
  display: 'flex';
  justify-content: space-between;
  @media screen and (max-width: 991px) {
    width: 100vw;
  }
`
export const SidebarBannerContainer = styled.div`
  display: flex;
  flex-direction: row;
`
export const BannerTextContainer = styled.div`
  margin-left: 10px;
  width: 35vw;
`

export const BannerLogo = styled.img`
  width: 100px;
  height: 35px;
`
export const BannerText = styled.p`
  font-size: 17px;
  font-family: 'Roboto';
  color: #3a465a;
`
export const BannerButton = styled.button`
  width: 110px;
  height: 35px;
  background-color: transparent;
  color: #3a465a;
  border: 1px solid #3a465a;
  font-size: 14px;
  font-family: 'Roboto';
  font-weight: 500;
  padding: 8px;
`
export const CloseButton = styled.button`
  background-color: transparent;
  border-width: 0px;
  cursor: pointer;
`
export const CloseButtonContainer = styled.div`
  align-self: flex-start;
`
