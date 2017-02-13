// import { ADD_POST, REPLY, REPORT, VOTE }

/*

reducers go here. These specify how state should respond to actions

*/

const board = (state = [], action) => {
  switch (action.type) {
    case 'ADD_POST':
    //
      return [
        ...state,
        {
          id: new Date.time(),
          text: action.text
        }
      ]
    case 'REPLY':
      return [
        ...state,
        {
          id: new Date.time(),
          text: action.text
        }
      ]
    default:
      return state
  }
}


export default board
