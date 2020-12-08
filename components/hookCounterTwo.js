import React, { useState } from 'react'

function hookCounterTwo() {
    const initialCount = 0
    const [count, setCount] = useState(initialCount)

    const incrementFive = () => {
        for (let i = 0; i < 5; i++) {
            setCount(prevCount => prevCount + 1)
        }

        // prevCount => prevCount - 1, takes the lastest value and adds/subtracts (-/+) 
        // from the append value which is "1" in this case
    }
    return (
        <div>
            Count : {count}
            <button onClick={() => setCount(initialCount)}>Reset</button>
            <button onClick={() => setCount(prevCount => prevCount + 1)}>Increment</button>
            <button onClick={() => setCount(prevCount => prevCount - 1)}>Decrement</button>
            <button onClick={incrementFive}>increment5</button>
        </div>
    )
}

export default hookCounterTwo
