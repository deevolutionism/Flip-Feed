import React from 'react'
import Composer from '../containers/Composer'
import ShowPosts from '../containers/ShowPosts'
import Feed from './Feed'
import SubBoards from '../containers/ShowSubBoards'

const App = () => {

    return (
      <div>
        <SubBoards />
        <Composer />
        <ShowPosts />
      </div>
    )

}

export default App
