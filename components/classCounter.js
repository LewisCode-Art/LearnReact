import React, { useState } from 'react'

export default function HookCounter() {

    // count is the variable that stores the value
    // setCount is the function that changes the value,
    //  usestate function sets the initial value to zero then passes to count

    const [count, setCount] = useState(0)

    return (
        <div>
            <button onClick={() => setCount(count + 1)}>
                Count {count}
            </button>
        </div>
    )
} 