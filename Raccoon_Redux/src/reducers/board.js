// import { ADD_POST, REPLY, REPORT, VOTE }

/*

reducers go here. These specify how application state should respond to actions
This recieves an action object and then determines what to do with the data.
*/

const board = (state = [], action) => {
  console.log('reducer recieved action:')
  console.log(action);
  switch (action.type) {
    case 'ADD_POST':
    //This action initialized by Composer.js
      console.log(action);
      return [
        ...state,
        {
          id:action.id,
          text:action.text
        }
      ]
    default:
      console.log('store:')
      console.log(state)
      return state
  }
}


export default board
