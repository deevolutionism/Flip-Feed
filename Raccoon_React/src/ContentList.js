import React from 'react';
import Post from './Post';

export default class ContentList extends React.Component {
  constructor(props){
    super(props)
    // this.handleSubmitComment = this.handleSubmitComment.bind(this);
  }

  // handleSubmitComment(comment) {
  //   this.props.handleSubmitComment(comment);
  // }

  render() {
    if(this.props.posts){
      var posts = [];
      console.log(this.props.posts);
      this.props.posts.forEach( (post) => {
        posts.push(
          <Post
            post={post}
            key={post._id}
            handleSubmitComment={this.props.handleSubmitComment}
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
