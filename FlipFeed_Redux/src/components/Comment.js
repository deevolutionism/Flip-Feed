import React from 'react'
// import ShowComments from '../containers/ShowComments'
// import $ from 'jquery'


const Comment = ({text,commentID}) => {

  const icon = 'icon-48.png'
  return (
    <div id={commentID}>
      <p>{text}</p>
    </div>
  )

}

//connect the component to the store to give it access
//to dispatch
export default Comment
