import Navbar from '../Navbar'
import {Container, Img, Heading, Para} from './style'

const NotFound = () => (
  <div>
    <Navbar />
    <Container>
      <Img
        src="https://assets.ccbp.in/frontend/react-js/meetup/not-found-img.png"
        alt="not found"
      />
      <Heading>Page Not Found</Heading>
      <Para>We are sorry, the page you requested could not be found</Para>
    </Container>
  </div>
)

export default NotFound
