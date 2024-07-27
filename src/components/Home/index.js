import {Component} from 'react'
import Navbar from '../Navbar'
import LoginContext from '../../loginContext/LoginContext'
import {
  MainContainer,
  ContentContainer,
  Img,
  Heading,
  Para,
  Button,
  LinkedButton,
} from './style'

class Home extends Component {

  render() {
    const {username, category} = this.context
    const isName = username.length !== 0
    return (
      <MainContainer>
        <Navbar />
        <ContentContainer>
          {isName ? (
            <Heading large>Hello {username}</Heading>
          ) : (
            <Heading>Welcome to Meetup</Heading>
          )}
          {isName ? (
            <Para large>Welcome to {category}</Para>
          ) : (
            <Para>Please register for the topic</Para>
          )}
          {isName === false && (
            <LinkedButton to="/register">
              <Button type="button" >
                Register
              </Button>
            </LinkedButton>
          )}
          <Img
            src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
            alt="meetup"
          />
        </ContentContainer>
      </MainContainer>
    )
  }
}

Home.contextType = LoginContext

export default Home
