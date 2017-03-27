// import { ADD_POST, REPLY, REPORT, VOTE }
import { combineReducers } from 'redux'
import * as ActionTypes from '../actions/actions'

/*

reducers go here. These specify how application state should respond to actions
This recieves an action object and then determines what to do with the data.

State in redux is IMMUTABLE. This means that in order to make changes to
existing state, a copy of the previous sate must be made and and modified upon,
and then that copy will replace the previous state.

*/


const board = (state, action) => {
  console.log('reducer recieved action:')
  switch (action.type) {
    case 'ADD_POST':
    //This action initialized by Composer.js
      console.log(action);
      return [
        ...state,
        {
          id:action.id,
          text:action.text,
          comments:[]
        }
      ]
    case 'ADD_REPLY':
      //return a copy of the original state with the
      //added comment inserted at the end of the comments array.
      //
      console.log(action);
      return state.map( (post) => {
        //if the postID matches, then add th
        if( action.id === post.id ){
          console.log('found the post the comment belongs to')
          console.log('here are the posts comments:')

          return {id:post.id, text:post.text, comments:[
            ...post.comments,
            {commentID:action.commentID,reply:action.text}
          ]}
        }
        return post
      })
    default:
      console.log('store:')
      console.log(state)
      return state
  }
}

const rootReducer = combineReducers({
  board
})

export default rootReducer
