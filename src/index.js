import { AppContainer } from 'react-hot-loader'
import React from 'react'
import ReactDOM from 'react-dom'

import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { logger } from 'redux-logger'
import { Provider } from 'react-redux'

import reducers from './reducers/index'
import App from './components/App'

import './style.css'

const middleware = [thunk]
const devMiddleware = [logger]
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(...[...middleware, ...devMiddleware]))
)

const render = Component =>
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        <Component />
      </Provider>
    </AppContainer>,
    document.getElementById('root')
  )

render(App)

// Webpack Hot Module Replacement API
if (module.hot) module.hot.accept('./components/App.jsx', () => render(App))
