import { createStore, combineReducers } from "redux";
import counterReducer from "./reducer/counterReducer";
import todoReducer from "./reducer/todoReducer";


const rootReducer = combineReducers(
    {
    counter: counterReducer,
    todos: todoReducer
}
)


const store = createStore(rootReducer)

export default store



// dispatch({type: "INCREMENT", payload: 100})

// counterReducer(0, {type: "INCREMENT", payload: 100})