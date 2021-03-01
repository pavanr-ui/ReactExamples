import React, {useReducer} from 'react'

const intitalState = 0
const reducer = (state, action) => {
    switch(action){
        case 'increment':
            return state + 1
        case 'decrement':
            return state - 1
        case 'reset':
            return intitalState
        default:
            return state
    }
}

function CounterThree() {

    const [count, dispatch] = useReducer(reducer, intitalState)
    const [countTwo, dispatchTwo] = useReducer(reducer, intitalState)
    return (
        <div>
            <div>Count - {count} </div>
            <button onClick={() => dispatch('increment')} >Increment</button>
            <button onClick={() => dispatch('decrement')} >Dcrement</button>
            <button onClick={() => dispatch('reset')}>Rest</button>

            <div>Count - {countTwo}</div>
            <button onClick={() => dispatchTwo('increment')} >Increment</button>
            <button onClick={() => dispatchTwo('decrement')} >Dcrement</button>
            <button onClick={() => dispatchTwo('reset')}>Rest</button>
        </div>
    )
}

export default CounterThree
