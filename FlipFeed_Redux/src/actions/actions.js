import { ADD_POST, ADD_REPLY, VOTE, REPORT, RECIEVE_POSTS } from '../constants/types'
import fetch from 'isomorphic-fetch'
// A C T I O N  T Y P E S

/*
Actions are used by dispatchers to trigger events. The content
is sent to the reducers which then handle state.
*/


// C O N S T A N T S

export const VotingOptions = {
  UP_VOTE:'UP_VOTE',
  DOWN_VOTE:'DOWN_VOTE'
}

export const ReportOptions = {
  NSFW:'NSFW',
  HARRASMENT:'HARRASMENT',
  OTHER:'OTHER'
}

// A C T I O N  C R E A T O R S

export function addPost(text, id){
  console.log("action: ADD_POST, text: " + text)
  return {
    type: ADD_POST,
    id,
    text
  }
}

export function addReply(text, postID, commentID) {
  console.log("action: REPLY, text: " + text)
  return {
    type: ADD_REPLY,
    id: postID,
    commentID: commentID,
    text
  }
}

export function invalidateSubreddit(subreddit) {
  return {
    type: INVALIDATE_SUBREDDIT,
    subreddit
  }
}

export function fetchPosts(subBoard){
  return dispatch => {
      dispatch(requestPosts(subBoard))
      return fetch(`https://gentrydemchak.com/api/posts.json`)
        .then(response => response.json())
        .then(json => dispatch(receivePosts(subBoard, json)))
    }
}

export function fetchPostsIfNeeded(subreddit) {
  return (dispatch, getState) => {
    if (shouldFetchPosts(getState(), subreddit)) {
      return dispatch(fetchPosts(subreddit))
    }
  }
}

function receivePosts(subBoard, json) {
  return {
    type: RECEIVE_POSTS,
    subBoard,
    posts: json.posts.map(post => post.text),
    receivedAt: Date.now()
  }
}

// export function switchBoard(subBoard){
//   console.log(`${subBoard} sub-board requested`);
//   return {
//     type: SWITCH_BOARD,
//
//   }
// }

export function vote(options){
  return {type: VOTE, options}
}

export function report(flag){
  return {type: REPORT, flag}
}
