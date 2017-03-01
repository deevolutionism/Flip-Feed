
import React, { PropTypes } from 'react'
import SubBoard from '../components/SubBoard'
/* Generates a list of posts. */

const ShowSubBoards = () => {

  //static subboard list for now...
  //maybe this will be dynamic later on.
  const subBoards = ['POLITICS','RANDOM','QA']
  var subBoardList = []

  subBoards.forEach( (subBoard) => {
    subBoardList.push(
      <SubBoard
        subBoard={subBoard}
      />
    )
  })

  return (
    <div>
        <ul>
          {subBoardList}
        </ul>
    </div>
  )

}

export default ShowSubBoards;
