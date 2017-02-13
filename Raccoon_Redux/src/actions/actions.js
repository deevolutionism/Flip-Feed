// A C T I O N  T Y P E S

/*
Actions are used by dispatchers to trigger events.
*/

/*
Composer actions:
-SUBMIT POST
*/

export const ADD_POST = 'POST'

/*
Feed actions:
-REPLY TO POST
-SUBMIT MODERATION
-REPORT
-UPVOTE
-DOWNVOTE
*/

export const REPLY = 'REPLY'
export const REPORT = 'REPORT'
export const VOTE = 'VOTE'

// C O N S T A N T S

export const VotingOptions = {
  UP_VOTE:'UP_VOTE',
  DOWN_VOTE:'DOWN_VOTE',
}

export const ReportOptions = {
  NSFW:'NSFW',
  HARRASMENT:'HARRASMENT',
  OTHER:'OTHER'
}

// A C T I O N  C R E A T O R S

export function addPost(text){
  return {
    type: ADD_POST,
    id: function(){ var d = new Date; return d.getTime()},
    text
  }
}

export function reply(id, text){
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
