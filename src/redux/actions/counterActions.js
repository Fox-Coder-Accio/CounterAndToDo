import { INCREMENT,DECREMENT,RESET } from "./actionsType.js";



export const increment = (payload=1) => {
      return({
        type: INCREMENT,
        payload: payload
      })
}

export const decrement = (payload=1) => {
    return({
        type: DECREMENT,
        payload: payload
    })
}

export const reset = () => {
    return({
        type: RESET
    })
}