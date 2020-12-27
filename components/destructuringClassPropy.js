import React, { Component } from 'react'

// using class components
class DestructuringClassPropy extends Component {

    render() {

        // Important to note that props are destructured in the render method
        const { name, heroName } = this.props

        // destructuring state syntax
        // const { state1, state2 } = this.state
        return (
            <div>
                <h1>Eyoo  {name} a.k.a {heroName}</h1>
            </div>)
    }
}

export default DestructuringClassPropy