import styled from 'styled-components'

export const VideoContainer = styled.div`
  background-color: ${props => props.videoBgColor};
  height: 100vh;
`

export const SidebarVideoContainer = styled.div`
  display: flex;
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
export const SuccessContainer = styled.div`
  width: 82vw;
  padding: 15px;
  height: 79vh;
  @media screen and (max-width: 991px) {
    padding: 0px;
  }
`
export const ReactPlayerContainer = styled.div`
  margin: 0px;
  width: 100vw;
`
export const VideoPlayerHeading = styled.p`
  color: ${props => props.color};
  font-size: 16px;
  font-family: 'Roboto';
  margin: 0px;
  margin-top: 5px;
`
export const VideoPlayerPara = styled.p`
  color: ${props => props.color};
  font-size: 14px;
  font-family: 'Roboto';
`
export const LikesSavedButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0px;
`
export const CustomButton = styled.button`
  border-width: 0px;
  display: flex;
  padding: 10px;
  background-color: transparent;
  cursor: pointer;
`
export const ButtonText = styled.p`
  font-size: 13px;
  margin: 0px;
  margin-top: 3px;
  margin-left: 4px;
  color: ${props => props.buttonColor};
`
export const Line = styled.hr`
  background-color: ${props => props.lineColor};
  width: 82vw;
  margin: 0px;
`
export const ChannelContainer = styled.div`
  display: flex;
`
export const ChannelVideoProfileImage = styled.img`
  width: 35px;
  height: 35px;
  margin-top: 5px;
  margin-right: 5px;
`
export const ChannelName = styled.p`
  font-size: 15px;
  color: ${props => props.color};
  font-family: 'Roboto';
  margin: 0px;
  margin-top: 7px;
  font-weight: 400;
`
export const ChannelSubscriberContainer = styled.div`
  margin-left: 10px;
`

export const Subscriber = styled.p`
  font-size: 13px;
  color: ${props => props.color};
  font-family: 'Roboto';
  margin: 0px;
  margin-top: 4px;
  font-weight: 400;
`
export const Description = styled.p`
  color: ${props => props.color};
  font-size: 13px;
  font-family: 'Roboto';
  margin-top: 20px;
`
