import styled from 'styled-components'

import {Link} from 'react-router-dom'

export const NavLinkContainer = styled.li`
  display: flex;
  background-color: ${props => props.bgColor};
  height: 40px;
  padding: 8px;
  cursor: pointer;
`
export const NavText = styled.p`
  font-size: 12px;
  font-family: 'Roboto';
  font-weight: 500;
  margin: 0px;
  margin-top: 3px;
  margin-left: 15px;
  color: ${props => props.color};
`
export const NavLink = styled(Link)`
  text-decoration: none;
`
export const NavContainer = styled.div`
  width: 16vw;
  height: 90vh;
  background-color: ${props => props.bgColor};
  padding-top: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media screen and (max-width: 991px) {
    display: none;
  }
`
export const NavItemsContainer = styled.ul`
  list-style-type: none;
  padding: 0px;
  margin: 0px;
`

export const ContactInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 8px;
`
export const ContactHeading = styled.p`
  font-size: 15px;
  font-weight: 500;
  font-family: 'Roboto';
  color: ${props => props.color};
`
export const SocialMedia = styled.div`
  display: flex;
`
export const SocialImage = styled.img`
  width: 28px;
  height: 28px;
  margin-right: 8px;
`
export const ContactText = styled.p`
  font-size: 13px;
  font-family: 'Roboto';
  font-weight: 500;
  color: ${props => props.color};
`
