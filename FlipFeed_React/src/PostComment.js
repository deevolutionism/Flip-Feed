import React from 'react';

export default class Post extends React.Component {
  constructor(props){
    super(props);
    var showCommentsBool = 0;
  }





  render () {

    return (
      <div className="anon_comment">
        <p>{this.props.id}</p>
        <p>{this.props.timeStamp}</p>
        <p>{this.props.text}</p>
      </div>
    )
  }

}
