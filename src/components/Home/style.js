import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const MainContainer = styled.div`
  height : 100vh;/
`

export const ContentContainer = styled.div`
   height: 90vh; 
   display:flex; 
   flex-direction: column; 
   justify-content: center; 
   align-items: center;/
`

export const Heading = styled.h1`
   margin-bottom: 0px;
   font-size : ${props => (props.large ? '4vw' : '')};
   color:  ${props => (props.large ? '#2563eb' : '#334155')};/
`

export const Para = styled.p`
   font-weight: ${props => (props.large ? 'bold' : 'normal')};
   font-size: ${props => (props.large ? '2vw' : '')};
   color:   ${props => (props.large ? '#334155' : '#475569')};/
`

export const Button = styled.button`
  background-color: #2563eb;
  border: none; 
  border-radius: 4px ;
  color: #ffffff;
  margin-bottom: 3%; 
  padding: 0.8% 3%;/
`

export const Img = styled.img`
   width: 50%;/
`

export const LinkedButton = styled(Link)`
   text-decoration: none;
`
