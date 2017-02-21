import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import Board from './reducers/board'
import App from './components/App'

const initialState = [
  {
    text: 'hello',
    id: 1
  },
  {
    text: 'world',
    id: 2
  }
]

let store = createStore(Board, initialState)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('App')
)
