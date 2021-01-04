import React from 'react'

function ChildComponent(props) {
    return (
        <div>
            {/* using funtions from parentComponent as props, passing parameters to parent component */}
            <button onClick={() => props.greetHandler('child')}>Greet Parent</button>
        </div>
    )
}

export default ChildComponent
