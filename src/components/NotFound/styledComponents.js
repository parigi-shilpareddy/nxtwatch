import styled from 'styled-components'

export const NotFoundContainer = styled.div`
  background-color: ${props => props.bgColor};
  height: 100vh;
  width: 100vw;
`
export const SidebarNotFoundContainer = styled.div`
  display: flex;
`

export const NotFoundVideosView = styled.div`
  display: flex;
  height: 85vh;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: none;
`

export const NotFoundVideosImage = styled.img`
  width: 40vw;
  height: 40vh;
`
export const NotFoundVideosHeading = styled.h1`
  font-family: 'Roboto';
  font-size: 25px;
  color: ${props => props.headingColor};
  text-align: center;
`

export const NotFoundVideosNote = styled.p`
  font-family: 'Roboto';
  font-size: 18px;
  color: ${props => props.noteColor};
  text-align: center;
`
