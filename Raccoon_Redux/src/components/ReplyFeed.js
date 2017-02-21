import React, { PropTypes } from 'react'
import Comment from './Comment'

/* Generates a list of comments. */

const CommentFeed = ({comments}) => {

  var commentlist = []

    if(comments){

      comments.forEach( (comment) => {
        console.log('generating comments');
        console.log(comment)
        commentlist.push(
          <Comment
            key={comment.id}
            text={comment.text}
          />
        )
      });

    }

  console.log(`rendering: ${comments}`)
  return (
    <div>

        {commentlist}

    </div>
  )

}


export default CommentFeed;
