import React, { useReducer } from 'react'

function counterOne() {
    useReducer(reducer, initialState)
    return (
        <div>
            <button>Increment</button>
            <button>Decrement</button>
            <button>Reset</button>
        </div>
    )
}

export default counterOne
