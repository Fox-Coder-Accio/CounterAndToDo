import {ADD_TODO, DELETE_TODO, UPDATE_TODO} from '../actions/actionsType'; 


const initialState = [] 


// todoReducer([], {
//   type: UPDATE_TODO,
//   payload: {
//     id: 2,
//     date: "Updated Todo",
//   }
// });


const todoReducer = (state = initialState, action) => {

    if(action.type === ADD_TODO){
        return  [...state, action.payload]
    }
    else if(action.type === DELETE_TODO){
        return   state.filter(todo => todo.id !== action.payload)
    }

    else if(action.type === UPDATE_TODO){
          let arr = []
          for(let t of state){
              if(t.id == action.payload.id){
                  arr.push({...t, title: action.payload.data})
              }
              else{
                  arr.push(t)
              }
          }
          return arr
    }

    else{
        return state
    }



}


export default todoReducer



// let arr = [
//   {
//     id: 1,
//     title: "Learn React",
//   },
//   {
//     id: 2,
//     title: "Learn Redux",
//   },
//   {
//     id: 3,
//     title: "Learn React Native",
//   }

// ]

// arr.filter(todo => todo.id)

