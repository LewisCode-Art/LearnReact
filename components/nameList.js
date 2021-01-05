import React from 'react'
import PersonList from './personList'

function NameList() {
    const names = ['Lewis', 'Reuben', 'Anthony']
    const persons = [
        {
            id: 1,
            name: 'Bruce',
            age: 30,
            skill: 'React'
        },
        {
            id: 2,
            name: 'Lewis',
            age: 25,
            skill: 'Angular'
        },
        {
            id: 3,
            name: 'Diana',
            age: 28,
            skill: 'Vue'
        }
    ]
    // const personLists = persons.map(person => <PersonList key={person.id} person={person} />)
    const nameLists = names.map((name, index) => <h2 key={index}>{name}</h2>)
    return (
        <div>
            {
                // personLists
                nameLists
            }
        </div>
    )
}

export default NameList