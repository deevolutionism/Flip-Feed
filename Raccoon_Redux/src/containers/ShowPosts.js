/*
This container is for handling the state of the Feed component
*/
import { connect } from 'react-redux'
import React from 'react'
import Feed from '../components/Feed'

//get all posts from state

// const getPosts = ({posts}) => {
//   return posts
// }

// map state to props

const mapStateToProps = (state) => {
  console.log('recieved state');
  console.log(state);
  return {
    posts: state
  }
}

// map dispatch to props
const mapDispatchToProps = (dispatch) => {
  return {

  }
}

//connect to redux store

const ShowPosts = connect(
  mapStateToProps,
  mapDispatchToProps
)(Feed)

// export

export default ShowPosts
