import React from 'react'

export default function FunctionClick() {

    function clickHandler () {
        console.log("Button Clicked")
    }

    return (
        <div>
            {/* Avoid put () infront of click handlers as that would result in a function call even before the button is clicked */}
            <button onClick={clickHandler}>Click</button>
        </div>
    )
}
