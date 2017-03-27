// import { ADD_POST, REPLY, REPORT, VOTE }
import { combineReducers } from 'redux'
import {
  SELECT_SUBREDDIT, INVALIDATE_SUBREDDIT,
  REQUEST_POSTS, RECEIVE_POSTS
} from '../constants/types'

/*

reducers go here. These specify how application state should respond to actions
This recieves an action object and then determines what to do with the data.

State in redux is IMMUTABLE. This means that in order to make changes to
existing state, a copy of the previous sate must be made and and modified upon,
and then that copy will replace the previous state.

*/


/*

state looks like this:
[
  {
    id: 1,
    text: "Hello, World",
    comments: [
      {
        id: 2,
        reply: "Sup, yo"
      },
      {
        id: 3,
        reply: "Yo, yo!"
      }
    ]
  },
  ...
]

state needs to look like this:

[
  {

  }
]

*/
function selectedSubreddit(state = 'reactjs', action) {
  switch (action.type) {
  case SELECT_SUBREDDIT:
    return action.subreddit
  default:
    return state
  }
}

function posts(state = {
  isFetching: false,
  didInvalidate: false,
  items: []
}, action) {
  switch (action.type) {
    case INVALIDATE_SUBREDDIT:
      return Object.assign({}, state, {
        didInvalidate: true
      })
    case REQUEST_POSTS:
      return Object.assign({}, state, {
        isFetching: true,
        didInvalidate: false
      })
    case RECEIVE_POSTS:
      return Object.assign({}, state, {
        isFetching: false,
        didInvalidate: false,
        items: action.posts,
        lastUpdated: action.receivedAt
      })
    default:
      console.log('')
      return state
  }
}

function postsBySubreddit(state = { }, action) {
  switch (action.type) {
    case INVALIDATE_SUBREDDIT:
    case RECEIVE_POSTS:
    case REQUEST_POSTS:
      return Object.assign({}, state, {
        [action.subreddit]: posts(state[action.subreddit], action)
      })
    default:
      return state
  }
}

function board(state, action) {
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
          // console.log(post)
          // return post.comments.map( (comment) => {
          //   console.log(comment)
          //   return {...post.comments, commentID:action.commentID, reply:action.reply}
          // })
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
  postsBySubreddit,
  selectedSubreddit
})

export default rootReducer
