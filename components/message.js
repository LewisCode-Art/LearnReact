import React, { Component } from 'react'

// using class components
class Message extends Component {
    constructor() {
        super()
        this.state = {
            message: 'Welcome visitor'
        }
    }

    // function to change the state of the component on click
    changeMessage() {
        this.setState({
            message: 'Thank you for subscribing'
        })
    }
    render() {
        return (
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={() => this.changeMessage()}>subscribe</button>
            </div>
        )
    }
}

export default Message