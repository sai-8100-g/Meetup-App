import {Component} from 'react'
import Navbar from '../Navbar'
import LoginContext from '../../loginContext/LoginContext'
import {
  MainContainer,
  ContentContainer,
  ImgContainer,
  Img,
  InnerContentContainer,
  Input,
  Label,
  Heading,
  From,
  Button,
  ErrorPara,
} from './style'

const topicsList = [
  {
    id: 'ARTS_AND_CULTURE',
    displayText: 'Arts and Culture',
  },
  {
    id: 'CAREER_AND_BUSINESS',
    displayText: 'Career and Business',
  },
  {
    id: 'EDUCATION_AND_LEARNING',
    displayText: 'Education and Learning',
  },
  {
    id: 'FASHION_AND_BEAUTY',
    displayText: 'Fashion and Learning',
  },
  {
    id: 'GAMES',
    displayText: 'Games',
  },
]

class Register extends Component {
  state = {
    username: '',
    category: '',
    error: '',
  }

  sendCategory = () => {
    const {getCategory} = this.context
    const {category} = this.state
    getCategory(category)
  }

  sendUserName = () => {
    const {getUsername} = this.context
    const {username} = this.state
    getUsername(username)
  }

  onSubmitFormDetails = event => {
    event.preventDefault()
    const {username} = this.state
    if (username === '') {
      this.setState({error: 'Please enter your name'})
    } else {
      const {history} = this.props
      this.sendUserName()
      this.sendCategory()
      history.replace('/')
    }
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangeSelectOption = event => {
    const filteredTopic = topicsList.filter(
      eachObj => eachObj.id === event.target.value,
    )
    const filterDisplayText = filteredTopic[0].displayText
    this.setState({category: filterDisplayText})
  }

  render() {
    const {error} = this.state
    return (
      <MainContainer>
        <Navbar />
        <ContentContainer>
          <InnerContentContainer>
            <ImgContainer>
              <Img
                src="https://assets.ccbp.in/frontend/react-js/meetup/website-register-img.png"
                alt="website register"
              />
            </ImgContainer>
            <From onSubmit={this.onSubmitFormDetails}>
              <Heading>Let us join</Heading>
              <Label htmlFor="name">NAME</Label>
              <Input
                id="name"
                type="text"
                onChange={this.onChangeUsername}
                placeholder="Enter Your Name"
              />
              <Label htmlFor="topics">TOPICS</Label>
              <Input
                as="select"
                id="topics"
                onChange={this.onChangeSelectOption}
              >
                {topicsList.map(eachObj => (
                  <option key={eachObj.id} value={eachObj.id}>
                    {eachObj.displayText}
                  </option>
                ))}
              </Input>
              <Button type="submit">Register Now</Button>
              {error && <ErrorPara>{error}</ErrorPara>}
            </From>
          </InnerContentContainer>
        </ContentContainer>
      </MainContainer>
    )
  }
}

Register.contextType = LoginContext

export default Register
