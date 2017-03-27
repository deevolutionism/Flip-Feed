import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import Board from './reducers/board'
import App from './components/App'

const initialState = [
  {
    text: 'hello',
    id: 1,
    comments:[
      {
        commentID:1,
        reply: 'sup yo'
      },
      {
        commentID:2,
        reply: 'not much dawg'
      }
    ]
  },
  {
    text: 'world',
    id: 2,
    comments:[
      {
        commentID:1,
        reply: 'why?'
      }
    ]
  }
]

const store = createStore()

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('App')
)
