import React from 'react'

// Destructuring in the parameter
// const DestructuringPropy = ({ name, heroName }) =>

// Destructuring in the function body
const DestructuringPropy = props => {

    // variable deconstructing props
    const { name, heroName } = props
    return (
        <div>
            {/*Prop rendered Below */}
            <h1>Hello {name} a.k.a {heroName}</h1>
        </div>
    )
}



export default DestructuringPropy
