import React from 'react'
import { connect } from 'react-redux'
// import { switchBoard } from '../actions/switchBoard'
// import ShowComments from '../containers/ShowComments'
// import $ from 'jquery'


const SubBoard = ({dispatch,subBoard}) => {


  return (
    <li className="boardtype" key={subBoard} onClick={()=>{dispatch(switchBoard(subBoard))}}>
      <p>{subBoard}</p>
    </li>
  )

}

//connect the component to the store to give it access
//to dispatch
export default connect()(SubBoard)
