import React from 'react'
import Composer from '../containers/Composer'
import ShowPosts from '../containers/ShowPosts'
import Feed from './Feed'
import ShowSubBoards from '../containers/ShowSubBoards'

const App = () => {

    return (
      <div>
        <ShowSubBoards />
        <Composer />
        <ShowPosts />
      </div>
    )

}

export default App
