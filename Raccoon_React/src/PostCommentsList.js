import React from 'react';
import PostComment from './PostComment';

export default class ContentList extends React.Component {
  constructor(props){
    super(props)
  }

  handleCommentSubmit( commentData ) {
    this.props.handleCommentSubmit( commentData );
  }

  render() {
    if(this.props.comments){
      var postComments = [];
      this.props.comments.forEach( (comment) => {
        postComments.push(
          <PostComment
            text={comment}
            timeStamp={comment}
            id={comment}
            key={comment}
          />
        )
      });
    }

    return (
      <div id="comments_container">
        {postComments}
      </div>
    )
  }

}
