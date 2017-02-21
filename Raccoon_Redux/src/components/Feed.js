import React, { PropTypes } from 'react'
import Post from './Post'

/* Generates a list of posts. */

const Feed = ({posts}) => {

  var postlist = []
  
    if(posts){

      posts.forEach( (post) => {
        console.log('generating post');
        console.log(post)
        postlist.push(
          <Post
            key={post.id}
            text={post.text}
          />
        )
      });

    }

  console.log(`rendering: ${posts}`)
  return (
    <div>

        {postlist}

    </div>
  )

}

// {
//   posts.map( post =>
//     <Post
//       key={post.id}
//       text={post.text}
//       {...post}
//     />
//   )
// }

// Feed.propTypes = {
//   posts: PropTypes.arrayOf(PropTypes.shape({
//     id:PropTypes.number.isRequired,
//     text:PropTypes.string.isRequired
//   }).isRequired).isRequired
// }

export default Feed;
