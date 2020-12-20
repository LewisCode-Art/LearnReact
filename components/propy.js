import React from 'react'


// property recieved from the parent file and rendered in the child component
const Propy = (props) =>
    <div>
        {/*Prop rendered Below */}
        <h1>Hello {props.name} a.k.a {props.heroName}</h1>
        {props.children}
    </div>

export default Propy
