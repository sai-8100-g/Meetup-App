import React from 'react'

const LoginContext = React.createContext({
  username: '',
  category: '',
  getUsername: () => {},
  getCategory: () => {},
})

export default LoginContext
