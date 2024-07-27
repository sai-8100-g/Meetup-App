import {Component} from 'react'
import {Switch, Route} from 'react-router-dom'
import Home from './components/Home'
import Register from './components/Register'
import NotFound from './components/NotFound'
import LoginContext from './loginContext/LoginContext'
import './App.css'

class App extends Component {
  state = {
    username: '',
    category: '',
  }

  getUsername = username => {
    this.setState({username})
  }

  getCategory = category => {
    this.setState({category})
  }

  render() {
    const {username, category} = this.state
    return (
      <LoginContext.Provider
        value={{
          username,
          category,
          getUsername: this.getUsername,
          getCategory: this.getCategory,
        }}
      >
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/register" component={Register} />
          <Route component={NotFound} />
        </Switch>
      </LoginContext.Provider>
    )
  }
}

export default App
