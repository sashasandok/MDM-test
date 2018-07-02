// react
import React from 'react'
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom'

// components
import Home from './Home/Home'
import Blog from './Blog/Blog'

const App = () => (
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/test" component={Blog} />
      </Switch>
    </div>
  </Router>
)

export default App
