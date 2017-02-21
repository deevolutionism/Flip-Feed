import React, { PropTypes } from 'react'
import ShowPosts from '../containers/ShowPosts'

const Post = ({text,id}) => {


  const icon = 'icon-48.png'
  return (
    <div className="anon_compose anon_container" id={id}>
      <div className="op_container">
        <img className="icon" src={icon}/>
        <div className="op">
          <p className = "name"> Racoon</p>
          <p className = "time">{id}</p>
        </div>
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
        <div className="anon_comment_button">Post comment</div>
      </div>
      <ShowComments/>
    </div>
  )

}

Post.propTypes = {
  text: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired
}

export default Post
