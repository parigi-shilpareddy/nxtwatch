import styled from 'styled-components'

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
export const InputContainer = styled.div`
  background-color: transparent;
  width: 37vw;
  height: 25px;
  display: flex;
  @media screen and (max-width: 991px) {
    width: 65vw;
  }
`

export const InputElement = styled.input`
  outline: 0px;
  background-color: transparent;
  border: 1px solid #8d898d;
  font-size: 14px;
  width: 35vw;
  height: 25px;
  padding-left: 15px;
  color: ${props => props.inputColor};
  @media screen and (max-width: 991px) {
    width: 65vw;
  }
`
export const SuccessContainer = styled.div`
  max-height: 100vh;
  height: auto;
  padding: 20px;
`
export const IconContainer = styled.button`
  height: 25px;
  width: 8vw;
  text-align: center;
  border: 1px solid #8d898d;
  background-color: ${props => props.bgIconColor};
`
export const VideosContainer = styled.ul`
  list-style-type: none;
  margin: 0px;
  padding: 0px;
  overflow-y: scroll;
  display: flex;
  flex-wrap: wrap;
  width: 84vw;
  height: ${props => props.height};
  margin-top: 10px;
  @media screen and(max-width: 991px) {
    width: 100vw;
  }
`
