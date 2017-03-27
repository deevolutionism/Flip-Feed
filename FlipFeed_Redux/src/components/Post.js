import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { addReply } from '../actions/actions'
import Comment from './Comment'
// import ShowComments from '../containers/ShowComments'
import $ from 'jquery'


const Post = ({dispatch,text,postID,comments}) => {

  var getInput = () => {
    let val = $('.anon_comment_input').text().trim()
    $('.anon_comment_input').text('')
    return val
  }

  var generateCommentID = () => {
    let d = new Date()
    return d.getTime()
  }

  var commentlist = []

    if(comments){

      comments.forEach( (comment) => {
        console.log('generating comments list');
        console.log(comment)
        commentlist.push(
          <Comment
            key={comment.commentID}
            commentID={comment.commentID}
            text={comment.reply}
          />
        )
      });

    }

  const icon = 'icon-48.png'
  return (
    <div className="anon_compose anon_container" id={postID}>
      <div className="op_container">
        <img className="icon" src={icon}/>
        <div className="op">
          <p className = "name"> Racoon</p>
          <p className = "time">{postID}</p>
        </div>
      </div>
      <div className="moderation_tools">
        <img src="flag.png"/>
      </div>
      <div className="anon_text_container">
        <span className="anon_text">{text}</span>
      </div>
      <div className="interactions_container">
        <span
          className="anon_comment_input"
          data-ph="Write a comment... "
          contentEditable="true"
        />
        <div className="anon_button" onClick={()=>{dispatch(addReply(getInput(),postID,generateCommentID()))}}>Post comment</div>
        <div className="anon_button anon_showComments">Show Comments ({comments.length})</div>
      </div>
        {commentlist}
    </div>
  )

}

//connect the component to the store to give it access
//to dispatch
export default connect()(Post)
