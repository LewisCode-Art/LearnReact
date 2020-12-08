import React, { useState } from 'react'

function hookCounterThree() {
    const [name, setName] = useState({ fisrtName: '', lastName: '' })
    // ... name, lastName: e.target.value, takes only the lastName props in the name object
    // and stores the user input 

    return (
        <div>
            <input type="text"
                value={name.fisrtName}
                onChange={e => setName({...name, fisrtName: e.target.value })}
            />
            <input type="text"
                value={name.lasttName}
                onChange={e => setName({... name, lastName: e.target.value })}
            />
            <h2>Your first name is - {name.fisrtName}</h2>
            <h2>Your first name is - {name.lastName}</h2>
        </div>
    )
}

export default hookCounterThree
