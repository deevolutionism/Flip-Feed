import React from 'react'
import Composer from '../containers/Composer'
import Feed from '../containers/Feed'

export default class App extends React.Component {
  constructor(props){
    super(props)
  }

  render(){
    return (
      <div>
        <Composer />
        <Feed />
      </div>
    )
  }
}
