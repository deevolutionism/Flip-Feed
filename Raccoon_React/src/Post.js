import React from 'react';

export default class Post extends React.Component {
  constructor(props){
    super(props);

  }

  render(){
    var icon = chrome.extension.getURL('icon-40.png');

    return (
      <div className="anon_compose anon_container" id={this.props.time}>
        <div className="op_container">
          <img className="icon" src={icon}/>
          <div className="op">
            <p className = "name"> Racoon</p>
            <p className = "time">{this.props.time}</p>
          </div>
        </div>
        <div className="anon_text_container">
          <span className="anon_text">{this.props.text}</span>
        </div>
        <div className="interactions_container">
          <button className="anon_comment_button" onClick={this.props.submitComment}>Comment</button>
        </div>
        <PostCommentsList/>
      </div>
    )
  }

}
