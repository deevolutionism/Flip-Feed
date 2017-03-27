import React, { PropTypes } from 'react'
import Post from './SubBoard'

/* Generates a list of posts. */

const SubBoardsList = ({posts}) => {

  var postlist = []

    if(posts){

      posts.forEach( (post) => {
        console.log('generating post');
        console.log(post)
        postlist.push(
          <Post
            key={post.id}
            text={post.text}
            postID={post.id}
            comments={post.comments}
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



export default Feed;
