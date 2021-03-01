import React, {useState, useMemo} from 'react'

function CounterIncre() {
    const [counterone, setCounterOne] = useState(0)
    const [countertwo, setCounterTwo] = useState(0)

    const incrementOne = () =>{
        setCounterOne( counterone + 1)
    }
    const incrementTwo = () =>{
        setCounterTwo( countertwo + 1 )
    }

    const isEven = useMemo(() => {
        let i=0
        while(i<2000000000) i++
        return counterone % 2 === 0
    }, [counterone])

    return (
        <div>
            <div>
            <button onClick={incrementOne}>Count one - {counterone}</button>
            <span> {isEven? 'Even' : 'Odd'} </span>
            </div>
            

            <button onClick={incrementTwo}>Count two - {countertwo} </button>
        </div>
    )
}

export default CounterIncre
