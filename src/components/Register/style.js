import styled from 'styled-components'

export const MainContainer = styled.div`
     height : 100vh;/
`

export const ContentContainer = styled.div`
    height: 90vh;
    display:flex; 
    justify-content: center; 
    align-items: center;/
`

export const InnerContentContainer = styled.div`
     width: 60%; 
     height: 90%;
     display: flex;/
`

export const ImgContainer = styled.div`
   width: 50%; 
   display: flex; 
   justify-content: center; 
   align-items: center;/
`

export const Img = styled.img`
    width: 100%;/
`

export const From = styled.form`
   width: 50%; 
   padding: 2%; 
   display: flex; 
   flex-direction: column;
   justify-content: center; 
   align-items: center;/
`

export const Input = styled.input`
    width: 100%; 
    padding: 3%; 
    border: none; 
    border-radius: 4px;
    color:  #334155;
    margin-bottom: 10%;

    box-shadow: 0px 0px 5px 2px #cbd5e1, -0px -0px 5px 2px #cbd5e1;

    &:focus {
        outline: none
    }/
`

export const Label = styled.label`
   align-self: flex-start;
   margin-bottom: 1%;
   color: #334155; 
   font-size: 0.9vw;/
`

export const Button = styled.button`
  background-color: #2563eb;
  border: none; 
  border-radius: 4px ;
  color: #ffffff; 
  align-self: flex-start;
  padding: 8px 16px;/
`
export const Heading = styled.h1`
align-self: flex-start;
   color: #334155;/
`

export const ErrorPara = styled.p`
align-self: flex-start;
   font-size: 0.9vw; 
   color: red;/
`
