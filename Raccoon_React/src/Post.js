import React from 'react';
import PostCommentsList from './PostCommentsList';

export default class Post extends React.Component {
  constructor(props){
    super(props);
    var showCommentsBool = 0;
    this.handleSubmitComment = this.handleSubmitComment.bind(this);
  }

  // showComments() {
  //   showCommentsBool = !showCommentsBool;
  //   if(showCommentsBool){
  //     $('.post_comments_list').show();
  //   } else {
  //     $('.post_comments_list').hide();
  //   }
  // }

  handleSubmitComment() {
    var val = $('.anon_comment_input').text();
    console.log(val);
    console.log('clicked');
    this.props.handleSubimtComment({_id : this.props.id, comment : val });
  }

  shouldComponentUpdate(nextProps, nextState){
    //consider using immutable.js
    //https://facebook.github.io/react/docs/optimizing-performance.html
    if(this.props.comments){
      if(this.props.comments.length !== nextProps.comments.length){
        return true;
      } else {
        return false;
      }
    }
  }

  render(){
    var icon = chrome.extension.getURL('icon-40.png');
    var uid = this.props._id;
    if(this.props.comments){
      var comments = this.props.comments.length;
    } else {
      var comments = '';
    }

    return (
      <div className="anon_compose anon_container" id={this.props.timeStamp}>
        <div className="op_container">
          <img className="icon" src={icon}/>
          <div className="op">
            <p className = "name"> Racoon</p>
            <p className = "time">{this.props.timeStamp}</p>
          </div>
        </div>
        <div className="anon_text_container">
          <span className="anon_text">{this.props.text}</span>
        </div>
        <div className="interactions_container">
          <span
            className="anon_comment_input"
            data-ph="Write a comment... "
            onChange={this.handleInputChange}
            contentEditable="true"
          />
          <button className="anon_post_comment anon_button" onClick={this.handleSubimtComment}>Post comment</button>
        </div>
        <PostCommentsList className="post_comments_list"
          comments={this.props.comments}
        />
      </div>
    )
  }

}
