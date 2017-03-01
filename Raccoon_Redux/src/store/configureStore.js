import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import loggerMiddleware from 'redux-logger'
import api from '../middleware/api'
import rootReducer from '../reducers/rootReducer'

const configureStore = (preloadedState) => createStore(
  rootReducer,
  preloadedState
)

export default configureStore
