import React from 'react'

function PersonList({ person }) {
    return (
        <div>
            <h2>My name is Mr. {person.name}. I am{person.age} years old. I am skilled in {person.skill}</h2>
        </div>
    )
}

export default PersonList
