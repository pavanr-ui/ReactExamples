import React, {useReducer} from 'react'

const intitalState ={
    firstCounter: 0,
    secondCounter: 10
} 
const reducer = (state, action) => {
    switch(action.type){
        case 'increment':
            return {...state, firstCounter : state.firstCounter + action.value}
        case 'decrement':
            return {...state, firstCounter : state.firstCounter - action.value}

            case 'increment2':
                return {...state, secondCounter : state.secondCounter + action.value}
            case 'decrement2':
                return {...state, secondCounter : state.secondCounter - action.value}
        case 'reset':
            return intitalState
        default:
            return state
    }
}

function CounterTwo() {

    const [count, dispatch] = useReducer(reducer, intitalState)
    return (
        <div>
            <div>Count - {count.firstCounter} </div>
            <div>Count - {count.secondCounter} </div>
            <button onClick={() => dispatch({type: 'increment', value: 1})} >Increment</button>
            <button onClick={() => dispatch({type: 'decrement', value: 1})} >Dcrement</button>
            <button onClick={() => dispatch({type: 'increment', value: 5})} >Increment 5</button>
            <button onClick={() => dispatch({type: 'decrement', value: 5})} >Dcrement 5</button>
            <button onClick={() => dispatch({type: 'reset'})}>Rest</button>
            <div>
            <button onClick={() => dispatch({type: 'increment2', value: 1})} >Increment counter2</button>
            <button onClick={() => dispatch({type: 'decrement2', value: 1})} >Dcrement counter2</button>
            </div>
        </div> 
    )
}

export default CounterTwo
