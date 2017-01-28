import React from 'react';
import Post from './Post';

export default class ContentList extends React.Component {
  constructor(props){
    super(props)
    this.handleSubmitComment = this.handleSubmitComment.bind(this);
  }

  handleSubmitComment(data) {
    this.props.handleCommentSubmit(data)
  }

  render() {
    if(this.props.posts){
      var posts = [];
      console.log(this.props.posts);
      this.props.posts.forEach( (post) => {
        posts.push(
          <Post
            text={post.text}
            upvote={post.upvotes}
            downvote={post.downvotes}
            id={post.time}
            key={post._id}
            handleSubmitComment={this.handleSubmitComment}
          />
        );
      });
    }

    return (
      <div id="posts_container">
        {posts}
      </div>
    )
  }

}
