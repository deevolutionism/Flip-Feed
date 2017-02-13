import React from 'react';
import PostCommentsList from './PostCommentsList';

export default class Post extends React.Component {
  constructor(props){
    super(props);
    var showCommentsBool = 0;
    // this.handleSubmitComment = this.handleSubmitComment.bind(this);
    this.handleTest = this.handleTest.bind(this);
  }

  // showComments() {
  //   showCommentsBool = !showCommentsBool;
  //   if(showCommentsBool){
  //     $('.post_comments_list').show();
  //   } else {
  //     $('.post_comments_list').hide();
  //   }
  // }

  // handleSubmitComment() {
  //   var val = $('.anon_comment_input').text();
  //   console.log(val);
  //   console.log('clicked');
  //   this.props.handleSubmitComment({_id : this.props.post._id, comment : val });
  // }

  // handleSubimtComment() {
  //   var val = $('.anon_comment_input').text();
  //   if (val) {
  //     console.log(comment);
  //     $.ajax({
  //      method: "PUT",
  //      url: "https://gentrydemchak.com/api/submitComment",
  //      dataType: 'JSON',
  //      data: comment
  //    })
  //    .done( ( msg ) => {
  //      console.log('payload sent');
  //      $('.anon_comment_input').text('');
  //    });
  //   }
  // }

  handleTest() {
    console.log('hello!');
    var val = $('.anon_comment_input').text();
    if (val) {
      console.log(val);
      $.ajax({
       method: "PUT",
       url: "https://gentrydemchak.com/api/submitComment",
       dataType: 'JSON',
       data: {"_id":this.props.post._id,"comment":val}
     })
     .done( ( msg ) => {
       console.log('payload sent');
       $('.anon_comment_input').text('');
     });
    }
  }

  shouldComponentUpdate(nextProps, nextState){
    //consider using immutable.js
    //https://facebook.github.io/react/docs/optimizing-performance.html
    if(this.props.post.comments){
      if(this.props.post.comments.length !== nextProps.post.comments.length){
        return true;
      } else {
        return false;
      }
    }
  }

  render(){
    var icon = chrome.extension.getURL('icon-40.png');
    var uid = this.props.post._id;
    if(this.props.comments){
      var comments = this.props.post.comments.length;
    } else {
      var comments = '';
    }

    return (
      <div className="anon_compose anon_container" id={this.props.post.timeStamp}>
        <div className="op_container">
          <img className="icon" src={icon}/>
          <div className="op">
            <p className = "name"> Racoon</p>
            <p className = "time">{this.props.post.timeStamp}</p>
          </div>
        </div>
        <div className="anon_text_container">
          <span className="anon_text">{this.props.post.text}</span>
        </div>
        <div className="interactions_container">
          <span
            className="anon_comment_input"
            data-ph="Write a comment... "
            contentEditable="true"
          />
          <div className="anon_post_comment anon_button" onClick={this.handleTest}>Post comment</div>
        </div>
        <PostCommentsList className="post_comments_list"
          comments={this.props.comments}
        />
      </div>
    )
  }

}
