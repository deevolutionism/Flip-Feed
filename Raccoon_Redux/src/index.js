import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import Board from './reducers/board.js'
import App from './components/App'

let store = createStore(Board, window.STATE_FROM_SERVER)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('App')
)
