import React from 'react'
import { connect } from 'react-redux'
import { addPost } from '../actions/actions'
import $ from 'jquery'

var getInput = () => {
  let val = $('.anon_input').text().trim()
  $('.anon_input').text('')
  console.log(`got input: ${val}`)
  return val
}

var generateID = () => {
  let d = new Date()
  return d.getTime()
}

const Composer = ({dispatch}) => {

  const icon = 'icon-48.png'
  return(
    <div>
      <div className="anon_composer">
        <img src={icon}/>
        <span
          className="anon_input"
          data-ph="What's on your mind?"
          contentEditable="true"
        >
        </span>
        <p className="composer_input">This post will be completely anonymous. Speak your mind.</p>
        <button className="anon_button anon_postButton" id="postButton" type="button" onClick={()=>{dispatch(addPost(getInput(), generateID()))}}>Post</button>
      </div>
    </div>
  )

}

export default connect()(Composer)
