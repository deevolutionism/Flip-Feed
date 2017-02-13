import React from 'react'
import { connect } from 'react-redux'
import { addPost } from '../actions/actions'
import $ from 'jquery'

class Composer extends React.Component {
  constructor(props) {
    super(props)
    this.addPost = this.addPost.bind(this)
  }

  addPost(){
    var val = $('.anon_input').text().trim();
    this.props.dispatch(addPost(val))
  }

  render () {
    const icon = 'icon-48.png'
    return(
      <div>
        <div className="anon_composer">
          <img src={icon}/>
          <span
            className="anon_input"
            data-ph="What's on your mind?"
            onChange={this.handleInputChange}
            onKeyDown={this.handleEnter}
            contentEditable="true"
          >
          </span>
          <p className="composer_input">This post will be completely anonymous. Speak your mind.</p>
          <button className="anon_button" id="postButton" type="button" onClick={this.addPost()}>Post</button>
        </div>
      </div>
    )
  }
}

export default connect()(Composer)
