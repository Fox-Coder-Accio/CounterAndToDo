import React from "react"; 
import {useSelector, useDispatch} from "react-redux";
import {increment, decrement, reset} from "../redux/actions/counterActions"

// getState() - returns the current state of the store 
// dispatch() - dispatches an action to change the state of the store

const CounterApp = () => {
    const count =  useSelector(state=> state.counter.count)
    const dispatch = useDispatch()
    // console.log(dispatch)

    return(
        <div>
          <h1>{count}</h1>
          <button onClick={()=>dispatch(increment(100))}> Increase </button>
          <button onClick={()=>dispatch(decrement(50))}> Decrease </button>
          <button onClick={()=>dispatch(reset())}> Reset </button>
        </div>
    )
}

export default CounterApp;