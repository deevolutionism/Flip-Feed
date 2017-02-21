import { ADD_POST, REPLY, VOTE, REPORT } from '../constants/types'
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

export function addReply(text, id){
  return {
    type: REPLY,
    id: id,
    text
  }
}

export function vote(options){
  return {type: VOTE, options}
}

export function report(flag){
  return {type: REPORT, flag}
}
