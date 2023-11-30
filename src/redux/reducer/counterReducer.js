import { INCREMENT,DECREMENT,RESET } from "../actions/actionsType.js";



let initialState = {count: 0} 

// counterReducer(0, {type: "INCREMENT", payload: 100})

function counterReducer(state=initialState, actions){
       console.log(state, actions)
       switch(actions.type){
        case INCREMENT:  return {...state, count: state.count + actions.payload}
        case DECREMENT:  return {...state, count: state.count - actions.payload}
        case RESET:  return initialState
        default: return state
       }
}


export default counterReducer


