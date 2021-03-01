import React, {useContext} from 'react'
import { CountContext } from '../App'

function ComponentoneB() {
    const countContext = useContext(CountContext)
    return (
        <div>

            Componentone-B { countContext.countState }
            <button onClick={() => countContext.countDispatch('increment')} >Increment</button>
            <button onClick={() => countContext.countDispatch('decrement')} >Dcrement</button>
            <button onClick={() => countContext.countDispatch('reset')}>Rest</button>
        </div>
    )
}

export default ComponentoneB
