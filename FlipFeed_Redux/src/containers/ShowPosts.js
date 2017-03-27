/*
This container is for handling the state of the Feed component
*/
import { connect } from 'react-redux'
import React, { component, PropTypes } from 'react'
import Feed from '../components/Feed'

//get all posts from state

class Feed extends Component {
  static propTypes = {
    repo: PropTypes.object,
    fullName: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    owner: PropTypes.object,
    stargazers: PropTypes.array.isRequired,
    stargazersPagination: PropTypes.object,
    loadRepo: PropTypes.func.isRequired,
    loadStargazers: PropTypes.func.isRequired
  }
}

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
