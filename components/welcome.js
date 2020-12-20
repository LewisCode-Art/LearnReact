import React, { Component } from 'react'

// using class components
class Welcome extends Component {
    render() {
        return (
            <div>
                <h1>Eyoo  {this.props.name} a.k.a {this.props.heroName}</h1>
            </div>)
    }
}

export default Welcome