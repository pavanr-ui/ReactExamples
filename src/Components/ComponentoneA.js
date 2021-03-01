import React, {useContext} from 'react'
import { CountContext } from '../App'

function ComponentoneA() {
    const countContext = useContext(CountContext)
    return (
        <div>

            Componentone-A { countContext.countState }
            <button onClick={() => countContext.countDispatch('increment')} >Increment</button>
            <button onClick={() => countContext.countDispatch('decrement')} >Dcrement</button>
            <button onClick={() => countContext.countDispatch('reset')}>Rest</button>
        </div>
    )
}

export default ComponentoneA
